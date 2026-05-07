import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, LogOut, Search, CheckCircle2, Circle, Calendar, Edit3, X, ChevronDown, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { SECTIONS } from './data.js';
import { auth, db, googleProvider } from './firebase.js';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

const DIFF_COLOR = {
  Easy: "#00ff88", Medium: "#fdcb6e", Hard: "#ff4757",
  "CF 1900": "#ff9f43", "CF 2000": "#ff9f43", "CF 2100": "#e17055", "CF 2200": "#e17055",
  "CF 2400": "#d63031", "CF 2500": "#d63031", "CF 2600": "#c0392b", "CF 2700": "#9b2335",
  "CF 2800": "#8e24aa", "CF 2900": "#6a0dad", "CF 3000": "#4a0070", "CF 3100": "#2d0040",
  Legendary: "#ff0080"
};

const PLAT_COLOR = { LC: "#ffa116", CF: "#1890ff", GFG: "#2f8d46", SPOJ: "#d35400" };

const getDiffColor = (d) => {
  if (d in DIFF_COLOR) return DIFF_COLOR[d];
  if (d && d.startsWith("CF")) return "#e17055";
  return "#b2bec3";
};

export default function App() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({}); // { [problemId]: { status, dateSolved, notes } }
  const [loading, setLoading] = useState(true);

  // UI State
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [platFilter, setPlatFilter] = useState("all");
  const [openSections, setOpenSections] = useState({ s1: true });
  const [openSubs, setOpenSubs] = useState({});
  const [selectedProblem, setSelectedProblem] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) {
        setProgress({});
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    const docRef = doc(db, "users", user.uid);
    const unsub = onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        setProgress(snap.data().progress || {});
      } else {
        setProgress({});
      }
      setLoading(false);
    });
    return () => unsub();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error(e);
      alert("Login failed. Check console or make sure Firebase is configured.");
    }
  };

  const handleLogout = () => signOut(auth);

  const updateProgress = async (problemId, dataUpdate) => {
    if (!user) {
      alert("Please login to save progress!");
      return;
    }
    const newProg = { ...progress };
    const current = newProg[problemId] || {};
    newProg[problemId] = { ...current, ...dataUpdate };
    
    // Optimistic UI update
    setProgress(newProg);
    
    // Save to DB
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, { progress: newProg }, { merge: true });
  };

  const toggleStatus = (e, pId) => {
    e.stopPropagation();
    const isDone = progress[pId]?.status === "done";
    updateProgress(pId, {
      status: isDone ? "todo" : "done",
      dateSolved: isDone ? null : Date.now()
    });
  };

  const allProblems = useMemo(() => SECTIONS.flatMap(s => s.subs.flatMap(sub => sub.problems)), []);
  const totalCount = allProblems.length;
  const doneCount = allProblems.filter(p => progress[p.id]?.status === "done").length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const filterProblem = (p) => {
    const isDone = progress[p.id]?.status === "done";
    if (filter === "done" && !isDone) return false;
    if (filter === "todo" && isDone) return false;
    if (platFilter !== "all" && p.p !== platFilter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
          <Circle size={40} color="var(--accent-green)" />
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 80 }}>
      {/* ── HEADER ── */}
      <header className="glass-panel" style={{ position: "sticky", top: 0, zIndex: 100, padding: "24px 0", borderTop: "none", borderLeft: "none", borderRight: "none" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}>
          <div className="header-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <h1 className="gradient-text" style={{ fontSize: "1.8rem", margin: 0, fontWeight: 700, letterSpacing: "-0.5px" }}>DP MASTER TRACKER</h1>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 4 }}>Conquer Dynamic Programming, one pattern at a time.</p>
            </div>
            
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={user.photoURL} alt="" style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid var(--accent-green)" }} />
                <button onClick={handleLogout} style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  <LogOut size={16} /> Sign out
                </button>
              </div>
            ) : (
              <button onClick={handleLogin} style={{ background: "var(--accent-green)", color: "#000", padding: "8px 16px", borderRadius: 8, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}>
                <LogIn size={18} /> Sign In to Save
              </button>
            )}
          </div>

          {/* PROGRESS BAR */}
          <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 12, padding: "16px", marginBottom: 20, border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "0.9rem" }}>
              <span style={{ fontWeight: 600 }}>Progress: <span style={{ color: "var(--accent-green)" }}>{doneCount}</span> / {totalCount}</span>
              <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}>{pct}%</span>
            </div>
            <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, ease: "easeOut" }} style={{ height: "100%", background: "linear-gradient(90deg, var(--accent-green), var(--accent-blue))", borderRadius: 4 }} />
            </div>
          </div>

          {/* FILTERS */}
          <div className="filters-container" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div className="search-input" style={{ position: "relative" }}>
              <Search size={16} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search problems..." style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--border)", color: "#fff", borderRadius: 8, padding: "8px 12px 8px 34px", fontSize: "0.9rem", width: "100%", outline: "none" }} />
            </div>

            <div style={{ display: "flex", background: "rgba(0,0,0,0.3)", borderRadius: 8, border: "1px solid var(--border)", overflow: "hidden" }}>
              {["all", "todo", "done"].map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ flex: 1, padding: "6px 14px", fontSize: "0.85rem", textTransform: "capitalize", background: filter === f ? "rgba(255,255,255,0.1)" : "transparent", color: filter === f ? "#fff" : "var(--text-muted)", borderRight: f !== "done" ? "1px solid var(--border)" : "none" }}>
                  {f}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", background: "rgba(0,0,0,0.3)", borderRadius: 8, border: "1px solid var(--border)", overflow: "hidden" }}>
              {["all", "LC", "CF", "GFG", "SPOJ"].map(p => (
                <button key={p} onClick={() => setPlatFilter(p)} style={{ padding: "6px 12px", fontSize: "0.85rem", background: platFilter === p ? `${PLAT_COLOR[p] || "#fff"}33` : "transparent", color: platFilter === p ? (PLAT_COLOR[p] || "#fff") : "var(--text-muted)", borderRight: p !== "SPOJ" ? "1px solid var(--border)" : "none" }}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main style={{ maxWidth: 1000, margin: "30px auto", padding: "0 20px" }}>
        {!user && (
          <div style={{ background: "rgba(255, 165, 0, 0.1)", border: "1px solid rgba(255, 165, 0, 0.3)", color: "orange", padding: 12, borderRadius: 8, marginBottom: 20, fontSize: "0.9rem", textAlign: "center" }}>
            You are viewing in read-only mode. Sign in to save your progress!
          </div>
        )}

        {SECTIONS.map(sec => {
          const secProblems = sec.subs.flatMap(s => s.problems);
          const secDone = secProblems.filter(p => progress[p.id]?.status === "done").length;
          const secPct = secProblems.length ? Math.round(secDone / secProblems.length * 100) : 0;
          const isOpen = !!openSections[sec.id];
          
          const visibleSubs = sec.subs.map(sub => ({
            ...sub,
            problems: sub.problems.filter(filterProblem)
          })).filter(sub => sub.problems.length > 0);

          if ((filter !== "all" || platFilter !== "all" || search) && visibleSubs.length === 0) return null;

          return (
            <motion.div key={sec.id} layout style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden", background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              {/* Section Header */}
              <div className="section-header" onClick={() => setOpenSections(o => ({ ...o, [sec.id]: !o[sec.id] }))} style={{ display: "flex", alignItems: "center", padding: "16px 20px", cursor: "pointer", background: isOpen ? "rgba(0,0,0,0.2)" : "transparent", borderBottom: isOpen ? "1px solid var(--border)" : "none" }}>
                <span style={{ color: sec.color, marginRight: 12 }}>{isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}</span>
                <h2 style={{ margin: 0, fontSize: "1.1rem", color: sec.color, flex: 1 }}>{sec.title}</h2>
                <div className="section-stats" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 100, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
                    <div style={{ height: "100%", width: `${secPct}%`, background: sec.color, borderRadius: 2 }} />
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", minWidth: 50, textAlign: "right" }}>{secDone}/{secProblems.length}</span>
                </div>
              </div>

              {/* Subsections */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: "12px 20px 20px" }}>
                    {visibleSubs.map(sub => {
                      const originalSub = sec.subs.find(s => s.id === sub.id);
                      const subDone = originalSub.problems.filter(p => progress[p.id]?.status === "done").length;
                      const totalSub = originalSub.problems.length;
                      const subOpen = openSubs[sub.id] !== false;

                      return (
                        <div key={sub.id} style={{ marginTop: 12 }}>
                          <div onClick={() => setOpenSubs(o => ({ ...o, [sub.id]: !subOpen }))} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", marginBottom: 8 }}>
                            <span style={{ color: "var(--text-muted)" }}>{subOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
                            <h3 style={{ margin: 0, fontSize: "0.95rem", color: "#ccc", flex: 1, fontWeight: 500 }}>{sub.title}</h3>
                            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{subDone}/{totalSub}</span>
                          </div>

                          {subOpen && (
                            <div style={{ display: "grid", gap: 6, paddingLeft: 22 }}>
                              {sub.problems.map((p, i) => {
                                const pData = progress[p.id] || {};
                                const isDone = pData.status === "done";
                                const hasNotes = !!pData.notes;

                                return (
                                  <div key={p.id} onClick={() => setSelectedProblem({ ...p, sectionColor: sec.color })} style={{ display: "flex", alignItems: "center", padding: "10px 14px", borderRadius: 8, background: isDone ? "rgba(0, 255, 136, 0.05)" : "rgba(0,0,0,0.2)", border: `1px solid ${isDone ? "rgba(0, 255, 136, 0.2)" : "rgba(255,255,255,0.03)"}`, cursor: "pointer", transition: "all 0.2s" }} className="problem-row" onMouseEnter={e => e.currentTarget.style.background = isDone ? "rgba(0, 255, 136, 0.1)" : "rgba(255,255,255,0.05)"} onMouseLeave={e => e.currentTarget.style.background = isDone ? "rgba(0, 255, 136, 0.05)" : "rgba(0,0,0,0.2)"}>
                                    
                                    <button onClick={(e) => toggleStatus(e, p.id)} style={{ marginRight: 12, color: isDone ? "var(--accent-green)" : "var(--text-muted)" }}>
                                      {isDone ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                    </button>

                                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", width: 24 }}>{i+1}.</span>
                                    
                                    <span className="problem-name" style={{ flex: 1, fontSize: "0.95rem", color: isDone ? "#aaa" : "#fff", textDecoration: isDone ? "line-through" : "none" }}>{p.name}</span>

                                    {hasNotes && <Edit3 size={14} style={{ color: "var(--accent-blue)", marginRight: 10 }} />}

                                    <div className="problem-badges" style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                      <span className="badge" style={{ color: PLAT_COLOR[p.p], background: `${PLAT_COLOR[p.p]}22`, border: `1px solid ${PLAT_COLOR[p.p]}44` }}>{p.p}</span>
                                      <span className="badge" style={{ color: getDiffColor(p.d), background: `${getDiffColor(p.d)}22`, border: `1px solid ${getDiffColor(p.d)}44` }}>{p.d}</span>
                                      <a 
                                        href={p.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        onClick={(e) => e.stopPropagation()} 
                                        style={{ 
                                          display: "flex", 
                                          alignItems: "center", 
                                          justifyContent: "center", 
                                          width: 28, 
                                          height: 28, 
                                          borderRadius: "50%", 
                                          background: "rgba(255,255,255,0.05)", 
                                          color: "var(--accent-blue)",
                                          border: "1px solid rgba(255,255,255,0.1)",
                                          transition: "all 0.2s"
                                        }}
                                        onMouseEnter={e => {
                                          e.currentTarget.style.background = "var(--accent-blue)";
                                          e.currentTarget.style.color = "#000";
                                        }}
                                        onMouseLeave={e => {
                                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                          e.currentTarget.style.color = "var(--accent-blue)";
                                        }}
                                        title="Open Problem"
                                      >
                                        <ExternalLink size={14} />
                                      </a>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </main>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProblem && (
          <div className="modal-overlay" onClick={() => setSelectedProblem(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={e => e.stopPropagation()} className="glass-panel modal-content" style={{ width: "100%", maxWidth: 600, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "90vh" }}>
              
              {/* Modal Header */}
              <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)", background: `linear-gradient(90deg, rgba(0,0,0,0.5), ${selectedProblem.sectionColor}11)`, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span className="badge" style={{ color: PLAT_COLOR[selectedProblem.p], border: `1px solid ${PLAT_COLOR[selectedProblem.p]}` }}>{selectedProblem.p}</span>
                    <span className="badge" style={{ color: getDiffColor(selectedProblem.d), border: `1px solid ${getDiffColor(selectedProblem.d)}` }}>{selectedProblem.d}</span>
                  </div>
                  <h2 style={{ margin: 0, fontSize: "1.4rem", color: "#fff" }}>{selectedProblem.name}</h2>
                  <a href={selectedProblem.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--accent-blue)", fontSize: "0.85rem", marginTop: 8, textDecoration: "none" }}>
                    Solve Problem <ExternalLink size={12} />
                  </a>
                </div>
                <button onClick={() => setSelectedProblem(null)} style={{ color: "var(--text-muted)" }}><X size={24} /></button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "24px", overflowY: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, background: "rgba(0,0,0,0.2)", padding: 16, borderRadius: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button onClick={() => updateProgress(selectedProblem.id, { status: progress[selectedProblem.id]?.status === "done" ? "todo" : "done", dateSolved: progress[selectedProblem.id]?.status !== "done" ? Date.now() : null })} style={{ display: "flex", alignItems: "center", gap: 8, color: progress[selectedProblem.id]?.status === "done" ? "var(--accent-green)" : "var(--text-main)", fontWeight: 600 }}>
                      {progress[selectedProblem.id]?.status === "done" ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                      {progress[selectedProblem.id]?.status === "done" ? "Completed" : "Mark as Done"}
                    </button>
                  </div>

                  {progress[selectedProblem.id]?.dateSolved && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      <Calendar size={14} /> Solved on: {new Date(progress[selectedProblem.id].dateSolved).toLocaleDateString()}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: 8, color: "#ccc", fontSize: "0.95rem", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                  <Edit3 size={16} /> Personal Notes & Approach
                </div>
                <textarea 
                  value={progress[selectedProblem.id]?.notes || ""} 
                  onChange={(e) => updateProgress(selectedProblem.id, { notes: e.target.value })}
                  placeholder="Write down the intuition, time complexity, edge cases..."
                  style={{ width: "100%", height: 180, background: "rgba(0,0,0,0.3)", border: "1px solid var(--border)", color: "#fff", padding: 16, borderRadius: 8, fontSize: "0.95rem", resize: "vertical", outline: "none", lineHeight: 1.6 }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
