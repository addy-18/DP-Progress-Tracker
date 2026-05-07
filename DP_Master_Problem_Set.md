# 🧠 Ultimate Dynamic Programming Master Problem Set
### A Rigorous, Exhaustive Guide from Foundations to Advanced Optimizations

> **How to use this guide:** Work through each pattern sequentially. Within each sub-pattern, problems are sorted by increasing difficulty. Aim to solve every problem independently before checking solutions. Track your progress by checking off problems as you complete them.

---

## 📋 Table of Contents

1. [1D DP (Linear DP)](#1-1d-dp-linear-dp)
2. [Multidimensional / 2D DP](#2-multidimensional--2d-dp)
3. [DP on Grids](#3-dp-on-grids)
4. [DP on Strings](#4-dp-on-strings)
5. [Knapsack Variations](#5-knapsack-variations)
6. [DP on Trees](#6-dp-on-trees)
7. [DP on Graphs / DAGs](#7-dp-on-graphs--dags)
8. [DP with Bitmasking](#8-dp-with-bitmasking)
9. [Digit DP](#9-digit-dp)
10. [DP with Binary Search](#10-dp-with-binary-search)
11. [Interval / Range DP](#11-interval--range-dp)
12. [Partition DP](#12-partition-dp)
13. [Game Theory DP](#13-game-theory-dp)
14. [Probability & Expected Value DP](#14-probability--expected-value-dp)
15. [DP Optimizations](#15-dp-optimizations)
    - [Divide & Conquer Optimization](#151-divide--conquer-optimization)
    - [Convex Hull Trick (CHT)](#152-convex-hull-trick-cht)
    - [Matrix Exponentiation](#153-matrix-exponentiation)
    - [Monotonic Queue / Deque Optimization](#154-monotonic-queue--deque-optimization)
    - [Knuth's Optimization](#155-knuths-optimization)
16. [Miscellaneous / Mixed Patterns](#16-miscellaneous--mixed-patterns)

---

## 1. 1D DP (Linear DP)

> **Core Idea:** State depends only on a single index/dimension. Transition looks back at previous states.

---

### 1.1 Fibonacci / Climbing Stairs Variants

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Fibonacci Number | LeetCode #509 | Easy |
| 2 | Climbing Stairs | LeetCode #70 | Easy |
| 3 | N-th Tribonacci Number | LeetCode #1137 | Easy |
| 4 | Min Cost Climbing Stairs | LeetCode #746 | Easy |
| 5 | Frog Jump (1 or 2 steps) | GFG | Easy |
| 6 | Climb n Stairs using 1, 2, or 3 steps | GFG | Easy |
| 7 | Count ways to reach N-th stair | GFG | Easy |
| 8 | Tiling Problem (2×N board with 1×2 tiles) | GFG | Medium |
| 9 | Domino and Tromino Tiling | LeetCode #790 | Medium |
| 10 | Number of Ways to Stay in the Same Place After Some Steps | LeetCode #1269 | Hard |

---

### 1.2 Maximum / Minimum Subarray / Subsequence

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Maximum Subarray (Kadane's) | LeetCode #53 | Medium |
| 2 | Maximum Product Subarray | LeetCode #152 | Medium |
| 3 | Best Time to Buy and Sell Stock | LeetCode #121 | Easy |
| 4 | Best Time to Buy and Sell Stock II | LeetCode #122 | Medium |
| 5 | Best Time to Buy and Sell Stock III | LeetCode #123 | Hard |
| 6 | Best Time to Buy and Sell Stock IV | LeetCode #188 | Hard |
| 7 | Best Time to Buy and Sell Stock with Cooldown | LeetCode #309 | Medium |
| 8 | Best Time to Buy and Sell Stock with Transaction Fee | LeetCode #714 | Medium |
| 9 | Maximum Sum Circular Subarray | LeetCode #918 | Medium |
| 10 | Maximum Sum of 3 Non-Overlapping Subarrays | LeetCode #689 | Hard |

---

### 1.3 Longest Increasing Subsequence (LIS) Variants

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Increasing Subsequence | LeetCode #300 | Medium |
| 2 | Number of Longest Increasing Subsequences | LeetCode #673 | Medium |
| 3 | Longest Non-Decreasing Subsequence | GFG | Medium |
| 4 | Increasing Triplet Subsequence | LeetCode #334 | Medium |
| 5 | Longest Bitonic Subsequence | GFG | Medium |
| 6 | Longest Chain of Pairs | GFG | Medium |
| 7 | Russian Doll Envelopes | LeetCode #354 | Hard |
| 8 | Maximum Height by Stacking Cuboids | LeetCode #1691 | Hard |
| 9 | Find the Longest Valid Obstacle Course at Each Position | LeetCode #1964 | Hard |
| 10 | Minimum Number of Removals to Make Mountain Array | LeetCode #1671 | Hard |

---

### 1.4 House Robber Variants

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | House Robber | LeetCode #198 | Medium |
| 2 | House Robber II (Circular) | LeetCode #213 | Medium |
| 3 | House Robber III (Tree) | LeetCode #337 | Medium |
| 4 | Delete and Earn | LeetCode #740 | Medium |
| 5 | Wiggle Subsequence | LeetCode #376 | Medium |
| 6 | Painting Fence Algorithm | GFG | Medium |
| 7 | Non-adjacent Maximum Sum Subsequence | GFG | Medium |
| 8 | Maximum Money You Can Rob From a Chain of Banks | GFG | Medium |
| 9 | Decode Ways | LeetCode #91 | Medium |
| 10 | Decode Ways II | LeetCode #639 | Hard |

---

### 1.5 Jump Game Variants

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Jump Game | LeetCode #55 | Medium |
| 2 | Jump Game II | LeetCode #45 | Medium |
| 3 | Jump Game III | LeetCode #1306 | Medium |
| 4 | Jump Game IV | LeetCode #1345 | Hard |
| 5 | Jump Game V | LeetCode #1340 | Hard |
| 6 | Jump Game VI | LeetCode #1696 | Medium |
| 7 | Jump Game VII | LeetCode #1871 | Medium |
| 8 | Frog Jump (variable k) | LeetCode #403 | Hard |
| 9 | Minimum Jumps to Reach End | GFG | Medium |
| 10 | Minimum Cost to Reach Destination in Time | LeetCode #1928 | Hard |

---

## 2. Multidimensional / 2D DP

> **Core Idea:** States are defined over two or more parameters — often two indices or an index plus a capacity/count.

---

### 2.1 Two-Sequence DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Common Subsequence | LeetCode #1143 | Medium |
| 2 | Shortest Common Supersequence | LeetCode #1092 | Hard |
| 3 | Edit Distance | LeetCode #72 | Hard |
| 4 | Distinct Subsequences | LeetCode #115 | Hard |
| 5 | Interleaving String | LeetCode #97 | Medium |
| 6 | Minimum ASCII Delete Sum for Two Strings | LeetCode #712 | Medium |
| 7 | Uncrossed Lines | LeetCode #1035 | Medium |
| 8 | Maximum Dot Product of Two Subsequences | LeetCode #1458 | Hard |
| 9 | Delete Operation for Two Strings | LeetCode #583 | Medium |
| 10 | Minimum Number of Deletions to Make String Sorted | GFG | Medium |

---

### 2.2 DP with Two Pointers / Two Passes

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Egg Drop Problem | LeetCode #887 | Hard |
| 2 | Stone Game | LeetCode #877 | Medium |
| 3 | Stone Game II | LeetCode #1140 | Medium |
| 4 | Stone Game III | LeetCode #1406 | Hard |
| 5 | Stone Game IV | LeetCode #1510 | Hard |
| 6 | Stone Game V | LeetCode #1563 | Hard |
| 7 | Stone Game VI | LeetCode #1686 | Medium |
| 8 | Stone Game VII | LeetCode #1690 | Medium |
| 9 | Stone Game VIII | LeetCode #1872 | Hard |
| 10 | Stone Game IX | LeetCode #2029 | Medium |

---

### 2.3 DP with State Compression (Non-bitmask)

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Coin Change | LeetCode #322 | Medium |
| 2 | Coin Change II | LeetCode #518 | Medium |
| 3 | Perfect Squares | LeetCode #279 | Medium |
| 4 | Word Break | LeetCode #139 | Medium |
| 5 | Word Break II | LeetCode #140 | Hard |
| 6 | Combination Sum IV | LeetCode #377 | Medium |
| 7 | Integer Break | LeetCode #343 | Medium |
| 8 | Concatenated Words | LeetCode #472 | Hard |
| 9 | Minimum Cost For Tickets | LeetCode #983 | Medium |
| 10 | Last Stone Weight II | LeetCode #1049 | Medium |

---

## 3. DP on Grids

> **Core Idea:** States correspond to cells in a 2D matrix; transitions come from adjacent cells (usually up/left or diagonals).

---

### 3.1 Path Counting in Grid

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Unique Paths | LeetCode #62 | Medium |
| 2 | Unique Paths II (with obstacles) | LeetCode #63 | Medium |
| 3 | Count All Possible Paths from Top-Left to Bottom-Right | GFG | Medium |
| 4 | Number of Paths with Sum K in Grid | GFG | Medium |
| 5 | Paths in Matrix with Equal Sum of Rows & Columns | GFG | Medium |
| 6 | Count Paths with Given XOR Value | GFG | Medium |
| 7 | Number of Increasing Paths in a Grid | LeetCode #2328 | Hard |
| 8 | Count All Paths from Source to Destination in Grid (mod) | Codeforces | Medium |
| 9 | Paths with Obstacles and K Allowed Breaks | GFG | Hard |
| 10 | Count of Paths of Given Length in Grid | GFG | Hard |

---

### 3.2 Minimum / Maximum Cost Path in Grid

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Minimum Path Sum | LeetCode #64 | Medium |
| 2 | Triangle Minimum Path Sum | LeetCode #120 | Medium |
| 3 | Minimum Falling Path Sum | LeetCode #931 | Medium |
| 4 | Minimum Falling Path Sum II | LeetCode #1289 | Hard |
| 5 | Dungeon Game | LeetCode #174 | Hard |
| 6 | Minimum Cost to Fill Given Weight in a Bag | GFG | Medium |
| 7 | Cherry Pickup | LeetCode #741 | Hard |
| 8 | Cherry Pickup II | LeetCode #1463 | Hard |
| 9 | Minimum Path Sum in Weighted Grid | Codeforces | Medium |
| 10 | Grid Path with Maximum Non-Negative Product | LeetCode #1594 | Medium |

---

### 3.3 Grid DP with Special Constraints

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Maximum Square of 1s | LeetCode #221 | Medium |
| 2 | Count Square Submatrices with All Ones | LeetCode #1277 | Medium |
| 3 | Maximal Rectangle | LeetCode #85 | Hard |
| 4 | Largest Plus Sign | LeetCode #764 | Medium |
| 5 | Number of Submatrices That Sum to Target | LeetCode #1074 | Hard |
| 6 | Maximum Sum Rectangle in a 2D Matrix | GFG | Hard |
| 7 | Bomb Enemy | LeetCode #361 | Medium |
| 8 | Stamping The Grid | LeetCode #2132 | Hard |
| 9 | Largest Rectangle of 1s with Constraints | GFG | Hard |
| 10 | Minimum Cost to Make at Least One Valid Path in a Grid | LeetCode #1368 | Hard |

---

## 4. DP on Strings

> **Core Idea:** States encode positions within one or more strings; transitions reflect character matches, insertions, deletions, etc.

---

### 4.1 LCS Variations

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Common Subsequence | LeetCode #1143 | Medium |
| 2 | Print LCS | GFG | Medium |
| 3 | Longest Common Substring | GFG | Medium |
| 4 | Shortest Common Supersequence (length) | GFG | Medium |
| 5 | Shortest Common Supersequence (print) | LeetCode #1092 | Hard |
| 6 | Number of Shortest Common Supersequences | GFG | Hard |
| 7 | Longest Repeating Subsequence | GFG | Medium |
| 8 | Maximum Length of Repeated Subarray | LeetCode #718 | Medium |
| 9 | Minimum Insertions to Make String Another String's Subsequence | GFG | Hard |
| 10 | LCS of Three Strings | GFG | Hard |

---

### 4.2 Edit Distance Variations

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Edit Distance | LeetCode #72 | Hard |
| 2 | One Edit Distance | LeetCode #161 | Medium |
| 3 | Delete Operation for Two Strings | LeetCode #583 | Medium |
| 4 | Minimum ASCII Delete Sum | LeetCode #712 | Medium |
| 5 | Minimum Number of Steps to Make Two Strings Anagram | LeetCode #1347 | Medium |
| 6 | Longest Uncommon Subsequence II | LeetCode #522 | Medium |
| 7 | Minimum Insertions to Make Palindrome | LeetCode #1312 | Hard |
| 8 | Uncrossed Lines | LeetCode #1035 | Medium |
| 9 | Minimum Operations to Convert Word | GFG | Medium |
| 10 | Distinct Subsequences II | LeetCode #940 | Hard |

---

### 4.3 Palindrome DP Variations

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Palindromic Substring | LeetCode #5 | Medium |
| 2 | Longest Palindromic Subsequence | LeetCode #516 | Medium |
| 3 | Count Palindromic Substrings | LeetCode #647 | Medium |
| 4 | Palindrome Partitioning II (min cuts) | LeetCode #132 | Hard |
| 5 | Palindrome Partitioning (all partitions) | LeetCode #131 | Medium |
| 6 | Minimum Insertions to Make String Palindrome | LeetCode #1312 | Hard |
| 7 | Count of Palindromic Subsequences | GFG | Medium |
| 8 | Palindromic Substrings Count in Range | GFG | Hard |
| 9 | Count Different Palindromic Subsequences | LeetCode #730 | Hard |
| 10 | Zuma Game | LeetCode #546 (Interval DP) | Hard |

---

### 4.4 String Matching / Pattern DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Regular Expression Matching | LeetCode #10 | Hard |
| 2 | Wildcard Matching | LeetCode #44 | Hard |
| 3 | Distinct Subsequences | LeetCode #115 | Hard |
| 4 | Number of Matching Subsequences | LeetCode #792 | Medium |
| 5 | Is Subsequence | LeetCode #392 | Easy |
| 6 | Count the Number of Consistent Strings | LeetCode #1684 | Easy |
| 7 | Longest String Chain | LeetCode #1048 | Medium |
| 8 | Word Pattern II | LeetCode #291 | Hard |
| 9 | Scramble String | LeetCode #87 | Hard |
| 10 | Super Egg Drop meets Pattern Matching (custom) | GFG | Hard |

---

### 4.5 Word / Sentence Break DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Word Break | LeetCode #139 | Medium |
| 2 | Word Break II | LeetCode #140 | Hard |
| 3 | Concatenated Words | LeetCode #472 | Hard |
| 4 | Number of Ways to Split a String into Three Parts | GFG | Medium |
| 5 | Extra Characters in a String | LeetCode #2707 | Medium |
| 6 | Maximum Number of Non-Overlapping Substrings | LeetCode #1520 | Hard |
| 7 | Count Number of Texts | LeetCode #2266 | Medium |
| 8 | Unique Substrings in Wraparound String | LeetCode #467 | Medium |
| 9 | Minimum Number of Valid Strings to Form Target I | LeetCode #3291 | Medium |
| 10 | Minimum Number of Valid Strings to Form Target II | LeetCode #3292 | Hard |

---

## 5. Knapsack Variations

> **Core Idea:** Decide whether to include each item based on a capacity or budget constraint.

---

### 5.1 0/1 Knapsack

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | 0/1 Knapsack Problem | GFG | Medium |
| 2 | Subset Sum Problem | LeetCode #416 / GFG | Medium |
| 3 | Partition Equal Subset Sum | LeetCode #416 | Medium |
| 4 | Last Stone Weight II | LeetCode #1049 | Medium |
| 5 | Target Sum | LeetCode #494 | Medium |
| 6 | Count of Subsets with Sum K | GFG | Medium |
| 7 | Minimum Subset Sum Difference | GFG | Medium |
| 8 | Boolean Parenthesization Problem | GFG | Hard |
| 9 | Number of subsets with given difference | GFG | Medium |
| 10 | Ones and Zeroes | LeetCode #474 | Medium |

---

### 5.2 Unbounded Knapsack

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Unbounded Knapsack | GFG | Medium |
| 2 | Coin Change (min coins) | LeetCode #322 | Medium |
| 3 | Coin Change II (count ways) | LeetCode #518 | Medium |
| 4 | Rod Cutting Problem | GFG | Medium |
| 5 | Ribbon Cut | GFG | Medium |
| 6 | Minimum Cost to Cut a Stick | LeetCode #1547 | Hard |
| 7 | Integer Break | LeetCode #343 | Medium |
| 8 | Perfect Squares | LeetCode #279 | Medium |
| 9 | Dice Throw | GFG | Medium |
| 10 | Minimum Multiplications to Reach End | GFG | Medium |

---

### 5.3 Bounded / Multiple Knapsack

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Knapsack with Duplicate Items (bounded) | GFG | Medium |
| 2 | Shopping Offers | LeetCode #638 | Medium |
| 3 | Pizza With 3n Slices | LeetCode #1388 | Hard |
| 4 | Count Possible Ways to Construct Buildings | GFG | Medium |
| 5 | Number of Dice Rolls with Target Sum | LeetCode #1155 | Medium |
| 6 | Form Largest Integer With Digits That Add up to Target | LeetCode #1449 | Hard |
| 7 | Number of Ways to Earn Points | LeetCode #2585 | Hard |
| 8 | Profitable Schemes | LeetCode #879 | Hard |
| 9 | Tallest Billboard | LeetCode #956 | Hard |
| 10 | Maximum Profit in Job Scheduling | LeetCode #1235 | Hard |

---

### 5.4 Multidimensional Knapsack

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Ones and Zeroes | LeetCode #474 | Medium |
| 2 | Profitable Schemes | LeetCode #879 | Hard |
| 3 | Number of Ways to Earn Points | LeetCode #2585 | Hard |
| 4 | Shopping Problem with Two Costs | GFG | Hard |
| 5 | Capacity To Ship Packages Within D Days | LeetCode #1011 | Medium |
| 6 | Minimum Space Wasted With K Resizing Operations | LeetCode #1959 | Hard |
| 7 | Maximum Value of K Coins from Piles | LeetCode #2218 | Hard |
| 8 | Distribute Repeating Integers | LeetCode #1655 | Hard |
| 9 | Max Dot Product of Two Subsequences | LeetCode #1458 | Hard |
| 10 | Target Sum with Limited Budget | Codeforces | Hard |

---

## 6. DP on Trees

> **Core Idea:** States are defined on subtrees; transitions aggregate results from children to parent via DFS.

---

### 6.1 Tree DP — Diameter / Path

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Diameter of Binary Tree | LeetCode #543 | Easy |
| 2 | Binary Tree Maximum Path Sum | LeetCode #124 | Hard |
| 3 | Longest Path in Tree (General Graph) | GFG | Medium |
| 4 | Diameter of N-ary Tree | LeetCode #1522 | Medium |
| 5 | Count Paths with Sum (path doesn't need root) | LeetCode #437 | Medium |
| 6 | Longest ZigZag Path in Binary Tree | LeetCode #1372 | Medium |
| 7 | Maximum Sum BST in Binary Tree | LeetCode #1373 | Hard |
| 8 | Sum of Distances in Tree | LeetCode #834 | Hard |
| 9 | All Nodes Distance K in Binary Tree | LeetCode #863 | Medium |
| 10 | Longest Path With Different Adjacent Characters | LeetCode #2246 | Hard |

---

### 6.2 Tree DP — Subtree Size / Count

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count Nodes Equal to Average of Subtree | LeetCode #2265 | Medium |
| 2 | Maximum Average Subtree | LeetCode #1120 | Medium |
| 3 | Subtree of Another Tree | LeetCode #572 | Easy |
| 4 | Count Good Nodes in Binary Tree | LeetCode #1448 | Medium |
| 5 | Delete Nodes and Return Forest | LeetCode #1110 | Medium |
| 6 | Number of Nodes in the Sub-Tree With the Same Label | LeetCode #1519 | Medium |
| 7 | Distribute Coins in Binary Tree | LeetCode #979 | Medium |
| 8 | Count Subtrees Summing to a Target | GFG | Medium |
| 9 | Vertex Cover in Tree | GFG | Hard |
| 10 | Tree Knapsack (Choosing Subtree Nodes) | Codeforces (1017E) | Hard |

---

### 6.3 Tree DP — Independent Set / Coloring

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | House Robber III | LeetCode #337 | Medium |
| 2 | Maximum Independent Set of Tree | GFG | Medium |
| 3 | Minimum Vertex Cover of Tree | GFG | Medium |
| 4 | Painting Trees (k colors no adjacent same) | GFG | Medium |
| 5 | Number of Ways to Color Tree | Codeforces | Hard |
| 6 | Minimum Dominating Set of Tree | GFG | Hard |
| 7 | Maximum Weight Independent Set in Tree | Codeforces | Hard |
| 8 | Tree Chromatic Number DP | GFG | Hard |
| 9 | Firefighter Problem on Tree | Codeforces | Hard |
| 10 | Guard Placement on Tree | GFG | Hard |

---

### 6.4 Re-rooting Technique

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Sum of Distances in Tree | LeetCode #834 | Hard |
| 2 | Count Nodes Equal to Sum of Descendants | GFG | Medium |
| 3 | Minimum Height Trees | LeetCode #310 | Medium |
| 4 | Farthest Node in Tree from Each Node | GFG | Medium |
| 5 | Sum of Subtree Depths | Codeforces | Hard |
| 6 | Tree Rerooting — Minimum Sum of Subtree Sizes | Codeforces | Hard |
| 7 | Distance to Nearest Node for All Nodes | GFG | Hard |
| 8 | Tree DP Rerooting - Max Value Subtree | Codeforces (1187E) | Hard |
| 9 | Minimize Cost with Re-rooting | Codeforces | Hard |
| 10 | Count of Subtrees with Even Sum (after rerooting) | GFG | Hard |

---

## 7. DP on Graphs / DAGs

> **Core Idea:** DP over topological orderings of a DAG, or memoized DFS on directed/weighted graphs.

---

### 7.1 DAG Shortest / Longest Path

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Path in DAG | GFG | Medium |
| 2 | Shortest Path in DAG | GFG | Medium |
| 3 | Minimum Cost to Reach Destination | GFG | Medium |
| 4 | Number of Paths in DAG | GFG | Medium |
| 5 | Network Delay Time (Bellman-Ford DP style) | LeetCode #743 | Medium |
| 6 | Cheapest Flights Within K Stops | LeetCode #787 | Medium |
| 7 | Minimum Cost to Connect All Points (DP+Bitmask) | LeetCode #1584 | Medium |
| 8 | Longest Increasing Path in a Matrix | LeetCode #329 | Hard |
| 9 | Maximum Vacation Days | LeetCode #568 | Hard |
| 10 | Count All Paths from Source to Destination in Weighted DAG | GFG | Hard |

---

### 7.2 DP on Implicit Graphs (Memoized DFS)

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Word Ladder (memoized) | LeetCode #127 | Hard |
| 2 | Frog Jump (variable) | LeetCode #403 | Hard |
| 3 | Minimum Number of Refueling Stops | LeetCode #871 | Hard |
| 4 | Minimum Cost to Reach Destination in Time | LeetCode #1928 | Hard |
| 5 | Maximum Score from Performing Multiplication Operations | LeetCode #1770 | Hard |
| 6 | Strange Printer | LeetCode #664 | Hard |
| 7 | Count Ways to Build Rooms in an Ant Colony | LeetCode #1916 | Hard |
| 8 | Find the Shortest Superstring | LeetCode #943 | Hard |
| 9 | Minimum Number of Days to Eat N Oranges | LeetCode #1553 | Hard |
| 10 | Minimum Moves to Move a Box to Their Target Location | LeetCode #1263 | Hard |

---

## 8. DP with Bitmasking

> **Core Idea:** The state includes a bitmask encoding which of N items (N ≤ 20) have been used. Classic for permutation / assignment problems.

---

### 8.1 Traveling Salesman / Hamiltonian Path

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Travelling Salesman Problem (TSP) | GFG | Hard |
| 2 | Find the Shortest Superstring | LeetCode #943 | Hard |
| 3 | Minimum Cost to Visit Every Node | GFG | Hard |
| 4 | Hamiltonian Path Existence (Bitmask DP) | GFG | Hard |
| 5 | Minimum XOR Sum of Two Arrays | LeetCode #1879 | Hard |
| 6 | Count Hamiltonian Paths in Grid | GFG | Hard |
| 7 | Best Meeting Point with k People | GFG | Hard |
| 8 | Shortest Hamiltonian Cycle | Codeforces | Hard |
| 9 | Minimum Cost to Connect All Cities | GFG | Hard |
| 10 | Minimum Distance Visiting All Cities | Codeforces | Hard |

---

### 8.2 Assignment / Matching with Bitmask

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Can I Win | LeetCode #464 | Medium |
| 2 | Beautiful Arrangement | LeetCode #526 | Medium |
| 3 | Count Number of Maximum Bitwise-OR Subsets | LeetCode #2044 | Medium |
| 4 | Partition to K Equal Sum Subsets | LeetCode #698 | Medium |
| 5 | Minimum Cost to Assign Workers to Jobs | GFG | Hard |
| 6 | Number of Ways to Assign Persons to Tasks | GFG | Hard |
| 7 | Stickers to Spell Word | LeetCode #691 | Hard |
| 8 | Maximize Score After N Operations | LeetCode #1799 | Hard |
| 9 | Distribute Repeating Integers | LeetCode #1655 | Hard |
| 10 | Minimum Number of Work Sessions | LeetCode #1986 | Hard |

---

### 8.3 Subset Enumeration DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Sum Over Subsets (SOS DP) | Codeforces | Medium |
| 2 | Number of Subsets with XOR Equal to K | GFG | Medium |
| 3 | Minimum XOR Sum of Two Arrays | LeetCode #1879 | Hard |
| 4 | Count Subsets with OR = Target | GFG | Medium |
| 5 | AND of All Subsets DP | GFG | Medium |
| 6 | Maximum AND Sum of Array | LeetCode #2172 | Hard |
| 7 | Maximum Students Taking Exam | LeetCode #1349 | Hard |
| 8 | Maximum Number of Achievable Transfer Requests | LeetCode #1601 | Hard |
| 9 | Minimum Cost to Connect Two Groups of Points | LeetCode #1595 | Hard |
| 10 | Count Ways to Distribute Candies | LeetCode #1692 | Hard |

---

## 9. Digit DP

> **Core Idea:** Count numbers in range [L, R] satisfying a digit property. State includes current position, tight constraint, and accumulated information.

---

### 9.1 Basic Digit DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count Numbers with Unique Digits | LeetCode #357 | Medium |
| 2 | Digit Count in Range | LeetCode #233 | Hard |
| 3 | Non-negative Integers without Consecutive Ones | LeetCode #600 | Hard |
| 4 | Numbers At Most N Given Digit Set | LeetCode #902 | Hard |
| 5 | Count Digit One (1s from 1 to n) | LeetCode #233 | Hard |
| 6 | Count Numbers with Odd Number of Divisors in Range | GFG | Medium |
| 7 | Count Numbers with Sum of Digits = K in Range | GFG | Medium |
| 8 | Numbers with Equal Digits Sum (even-odd) | GFG | Medium |
| 9 | Count Numbers Without Digit K in Range | GFG | Medium |
| 10 | Count Stepping Numbers (adjacent digits differ by 1) | GFG | Medium |

---

### 9.2 Advanced Digit DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Digit DP — Count Numbers Divisible by K | GFG | Medium |
| 2 | Count Numbers with No Repeated Digits | LeetCode #357 (variant) | Medium |
| 3 | Lucky Numbers in a Range | GFG | Medium |
| 4 | Armstrong Numbers in Range | GFG | Medium |
| 5 | K-th Digit String | GFG | Hard |
| 6 | Count Numbers with Digit Sum Divisible by K | Codeforces | Hard |
| 7 | Palindromic Numbers in Range | GFG | Hard |
| 8 | Count Special Numbers | LeetCode #2376 | Hard |
| 9 | Count of Integers | LeetCode #2719 | Hard |
| 10 | Count Integers in Intervals with Digit Constraint | Codeforces | Hard |

---

## 10. DP with Binary Search

> **Core Idea:** Combine DP recurrence with binary search to reduce O(n²) transitions to O(n log n). Classic in LIS and scheduling.

---

### 10.1 LIS with Binary Search (Patience Sorting)

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Increasing Subsequence (O(n log n)) | LeetCode #300 | Medium |
| 2 | Russian Doll Envelopes | LeetCode #354 | Hard |
| 3 | Length of Longest Fibonacci Subsequence | LeetCode #873 | Medium |
| 4 | Longest Arithmetic Subsequence | LeetCode #1027 | Medium |
| 5 | Longest Arithmetic Subsequence of Given Difference | LeetCode #1218 | Medium |
| 6 | Find the Longest Valid Obstacle Course | LeetCode #1964 | Hard |
| 7 | Maximum Height by Stacking Cuboids | LeetCode #1691 | Hard |
| 8 | Minimum Number of Removals to Make Mountain Array | LeetCode #1671 | Hard |
| 9 | Longest Non-Overlapping Subsequence | GFG | Hard |
| 10 | Count of LIS using BIT / Merge Sort | Codeforces | Hard |

---

### 10.2 Scheduling / Interval DP with Binary Search

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Non-Overlapping Intervals | LeetCode #435 | Medium |
| 2 | Maximum Profit in Job Scheduling | LeetCode #1235 | Hard |
| 3 | Single-Machine Job Scheduling (weighted) | GFG | Hard |
| 4 | Minimum Number of Arrows to Burst Balloons | LeetCode #452 | Medium |
| 5 | Activity Selection with Profits | GFG | Medium |
| 6 | Weighted Job Scheduling | GFG | Hard |
| 7 | Video Stitching | LeetCode #1024 | Medium |
| 8 | Minimum Interval to Include Each Query | LeetCode #1851 | Hard |
| 9 | Count Ways to Build Good Strings | LeetCode #2466 | Medium |
| 10 | Maximum Number of Events That Can Be Attended II | LeetCode #1751 | Hard |

---

## 11. Interval / Range DP

> **Core Idea:** dp[i][j] represents the optimal answer for the subproblem over interval [i, j]. Build up from shorter intervals to longer.

---

### 11.1 Matrix Chain / Optimal Parenthesization

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Matrix Chain Multiplication | GFG | Hard |
| 2 | Minimum Score Triangulation of Polygon | LeetCode #1039 | Medium |
| 3 | Burst Balloons | LeetCode #312 | Hard |
| 4 | Strange Printer | LeetCode #664 | Hard |
| 5 | Minimum Cost to Merge Stones | LeetCode #1000 | Hard |
| 6 | Zuma Game | LeetCode #546 | Hard |
| 7 | Minimum Cost to Cut a Stick | LeetCode #1547 | Hard |
| 8 | Optimal Strategy for a Game (coin picking) | GFG | Medium |
| 9 | Super Egg Drop | LeetCode #887 | Hard |
| 10 | Removing Boxes | LeetCode #546 (variant) | Hard |

---

### 11.2 Palindrome / Substring Interval DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Longest Palindromic Substring | LeetCode #5 | Medium |
| 2 | Palindrome Partitioning II | LeetCode #132 | Hard |
| 3 | Count Palindromic Subsequences | GFG | Medium |
| 4 | Count Different Palindromic Subsequences | LeetCode #730 | Hard |
| 5 | Minimum Insertions to Make String Palindrome | LeetCode #1312 | Hard |
| 6 | Minimum Steps to Remove Substring | GFG | Hard |
| 7 | Remove Boxes | LeetCode #546 | Hard |
| 8 | Minimum Moves to Convert String | LeetCode #2027 | Easy |
| 9 | Check if String Can Be Palindrome with K Moves | GFG | Medium |
| 10 | Maximum Length of a Concatenated String with Unique Characters (Interval variant) | GFG | Hard |

---

### 11.3 Game / Strategy Interval DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Predict the Winner | LeetCode #486 | Medium |
| 2 | Stone Game | LeetCode #877 | Medium |
| 3 | Optimal Strategy for a Game | GFG | Medium |
| 4 | Vending Machine Coin Game | GFG | Medium |
| 5 | Minimum Score after Removing Subarray | GFG | Hard |
| 6 | Can Alice Win the Token Game? | GFG | Hard |
| 7 | Guess Number Higher or Lower II | LeetCode #375 | Medium |
| 8 | Minimum Cost for Cutting Wood | GFG | Hard |
| 9 | Sprague-Grundy based Interval Game | Codeforces | Hard |
| 10 | Multi-stage Interval Game DP | Codeforces | Hard |

---

## 12. Partition DP

> **Core Idea:** Divide an array or string into parts optimally; dp[i] = best answer using first i elements partitioned in some way.

---

### 12.1 Array / String Partitioning

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Palindrome Partitioning II | LeetCode #132 | Hard |
| 2 | Split Array Largest Sum | LeetCode #410 | Hard |
| 3 | Partition Array for Maximum Sum | LeetCode #1043 | Medium |
| 4 | Largest Sum of Averages | LeetCode #813 | Medium |
| 5 | K Concatenation Maximum Sum | LeetCode #1191 | Medium |
| 6 | Maximum Sum After Partitioning | LeetCode #1043 | Medium |
| 7 | Split Array with Equal Sum | LeetCode #548 | Hard |
| 8 | Minimum Cost to Merge Stones | LeetCode #1000 | Hard |
| 9 | Decode Ways | LeetCode #91 | Medium |
| 10 | Allocate Minimum Pages | GFG | Medium |

---

### 12.2 Optimal K-Partition

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Allocate Minimum Pages (k students) | GFG | Medium |
| 2 | Painters Partition Problem | GFG | Medium |
| 3 | Split Array Largest Sum | LeetCode #410 | Hard |
| 4 | Divide Chocolate | LeetCode #1231 | Hard |
| 5 | Minimum Cost to Divide Array into K Parts | GFG | Hard |
| 6 | Largest Sum of Averages (K partitions) | LeetCode #813 | Medium |
| 7 | Maximum Score from Performing Multiplication Operations | LeetCode #1770 | Hard |
| 8 | Strange Printer II | LeetCode #1591 | Hard |
| 9 | Count Subarrays with Bounded Max | LeetCode #795 | Medium |
| 10 | Minimum Cost to Connect Sticks | LeetCode #1167 | Medium |

---

## 13. Game Theory DP

> **Core Idea:** Two players play optimally. Use minimax, Sprague-Grundy theorem, and memoization.

---

### 13.1 Minimax / Two-Player DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Predict the Winner | LeetCode #486 | Medium |
| 2 | Stone Game | LeetCode #877 | Medium |
| 3 | Stone Game II | LeetCode #1140 | Medium |
| 4 | Stone Game III | LeetCode #1406 | Hard |
| 5 | Stone Game IV | LeetCode #1510 | Hard |
| 6 | Stone Game V | LeetCode #1563 | Hard |
| 7 | Optimal Strategy for a Game | GFG | Medium |
| 8 | Guess Number Higher or Lower II | LeetCode #375 | Medium |
| 9 | Cat and Mouse | LeetCode #913 | Hard |
| 10 | Cat and Mouse II | LeetCode #1728 | Hard |

---

### 13.2 Nim / Sprague-Grundy

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Nim Game | LeetCode #292 | Easy |
| 2 | Flip Game II | LeetCode #294 | Medium |
| 3 | Divisor Game | LeetCode #1025 | Easy |
| 4 | Can I Win | LeetCode #464 | Medium |
| 5 | Grundy Number for Nim | GFG | Medium |
| 6 | Grundy Values for Game of Nim Variants | GFG | Medium |
| 7 | Sprague-Grundy: Take-Away Games | Codeforces | Medium |
| 8 | Coin Turning Game (Sprague-Grundy) | GFG | Hard |
| 9 | Green Hackenbush (Sprague-Grundy) | GFG | Hard |
| 10 | Wythoff's Game | GFG | Hard |

---

### 13.3 Combinatorial Games on Arrays

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Coins in a Line | GFG | Medium |
| 2 | Coins in a Line II | GFG | Medium |
| 3 | Coins in a Line III | GFG | Hard |
| 4 | Take Stones Game | GFG | Medium |
| 5 | Weighted Game with Stone Pile | GFG | Hard |
| 6 | Number of Turns to Empty Array | GFG | Medium |
| 7 | Burning String Game | Codeforces | Hard |
| 8 | First Player to Win in Token Game | GFG | Hard |
| 9 | XOR Nim with K Piles | GFG | Hard |
| 10 | Tournament Bracket DP | Codeforces | Hard |

---

## 14. Probability & Expected Value DP

> **Core Idea:** States encode probability distributions; transitions apply rules of conditional probability. Often involves real-valued dp tables.

---

### 14.1 Expected Value DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | New 21 Game | LeetCode #837 | Medium |
| 2 | Soup Servings | LeetCode #808 | Medium |
| 3 | Dice Roll Simulation | LeetCode #1223 | Hard |
| 4 | Knight Probability in Chessboard | LeetCode #688 | Medium |
| 5 | Student Attendance Record II | LeetCode #552 | Hard |
| 6 | Probability of a Two Boxes Having the Same Number of Distinct Balls | LeetCode #1467 | Hard |
| 7 | Random Flip Matrix | LeetCode #519 | Medium |
| 8 | Expected Number of Moves to Finish Snakes & Ladders | GFG | Hard |
| 9 | Expected Coin Flips to Get k Heads | GFG | Hard |
| 10 | Dice Probability to Reach Exactly N | Codeforces | Hard |

---

### 14.2 Random Walks / Markov Chain DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Snakes and Ladders | LeetCode #909 | Medium |
| 2 | Knight Probability on Chessboard | LeetCode #688 | Medium |
| 3 | Random Walk Expected Steps | GFG | Medium |
| 4 | Gambler's Ruin Problem | GFG | Medium |
| 5 | Probability Reaching Each Cell in Grid | GFG | Medium |
| 6 | Out of Boundary Paths | LeetCode #576 | Medium |
| 7 | Escape The Ghosts | LeetCode #789 | Medium |
| 8 | Reaching Points | LeetCode #780 | Hard |
| 9 | Minimum Probability Path in Grid | GFG | Hard |
| 10 | Expected Steps in Game Simulation | Codeforces | Hard |

---

## 15. DP Optimizations

> **Core Idea:** Accelerate standard DP transitions using data structures, geometric insights, or algebraic techniques.

---

### 15.1 Divide & Conquer Optimization

> **When to use:** dp[i][j] = min over k of (dp[i-1][k] + cost(k,j)) where the optimal k is monotone (opt[i][j] ≤ opt[i][j+1]).

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Divide Array in K Segments with Min Cost | GFG | Hard |
| 2 | Largest Sum of Averages (O(kn log n)) | LeetCode #813 | Medium |
| 3 | Optimal K-Partition of Array (D&C) | Codeforces (1603E) | Hard |
| 4 | Minimum Cost to Hire K Workers | LeetCode #857 | Hard |
| 5 | K-Segment Optimal Partition — SPOJ NKLEAVES | SPOJ | Hard |
| 6 | Codeforces 524F — Basketball | Codeforces | Hard |
| 7 | Codeforces 868F — Yet Another Substring | Codeforces | Hard |
| 8 | USACO Tallest Cow | USACO | Hard |
| 9 | Batch Job Scheduling with D&C Optimization | GFG | Hard |
| 10 | Sequence Split Minimizing Max Segment Cost | Codeforces | Hard |

---

### 15.2 Convex Hull Trick (CHT)

> **When to use:** dp[i] = min/max over j < i of (dp[j] + b[j] * a[i]) — linear functions in i with slope b[j].

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Fences (Classic CHT problem) | SPOJ | Hard |
| 2 | Buying and Selling Stocks (CHT variant) | Codeforces | Hard |
| 3 | Minimum Cost Polygon Triangulation | GFG | Hard |
| 4 | Codeforces 311E — Horizontal and Vertical (Li Chao) | Codeforces | Hard |
| 5 | Codeforces 660F — Bear and Bowling (CHT) | Codeforces | Hard |
| 6 | Codeforces 319C — Kalila and Dimna (Li Chao Tree) | Codeforces | Hard |
| 7 | Last Farm — Convex Hull Trick | SPOJ | Hard |
| 8 | Codeforces 1083E — The Fair Nut and Rectangles | Codeforces | Hard |
| 9 | IOI 2002 — Batch Scheduling (CHT) | IOI | Hard |
| 10 | USACO 2016 Help Yourself (CHT on intervals) | USACO | Hard |

---

### 15.3 Matrix Exponentiation

> **When to use:** Linear recurrences that need fast computation for very large n (n up to 10^18). Convert to matrix form and use fast exponentiation.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Nth Fibonacci Number (Matrix Expo) | GFG | Medium |
| 2 | Tribonacci with Matrix Exponentiation | GFG | Medium |
| 3 | Tiling Problem for 2×N Board (Matrix) | GFG | Hard |
| 4 | Codeforces 509C — Sums of Digits (Matrix variant) | Codeforces | Hard |
| 5 | Paths of Length N in Graph (Matrix Expo) | GFG | Hard |
| 6 | Number of Strings of Length N with Pattern | GFG | Hard |
| 7 | Linear Recurrence Modulo Prime | Codeforces | Hard |
| 8 | Codeforces 1033E — Hidden Bipartite Graph | Codeforces | Hard |
| 9 | Codeforces 1264E — Beautiful League (Matrix+DP) | Codeforces | Hard |
| 10 | Counting Walks of Length K in Graph | GFG | Hard |

---

### 15.4 Monotonic Queue / Deque Optimization

> **When to use:** Sliding window maximum/minimum in DP transitions. dp[i] = max(dp[j]) + cost where j in a sliding window.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Jump Game VI | LeetCode #1696 | Medium |
| 2 | Sliding Window Maximum | LeetCode #239 | Hard |
| 3 | Constrained Subsequence Sum | LeetCode #1425 | Hard |
| 4 | Maximum Sum of Subarray of Length at Most K | GFG | Hard |
| 5 | Minimum Cost to Cut Chocolate Bar | GFG | Hard |
| 6 | Maximum Points in N Attempts | GFG | Hard |
| 7 | Codeforces 940E — Kira and Mathematics (Deque DP) | Codeforces | Hard |
| 8 | Codeforces 1603C — Extreme Subtraction | Codeforces | Hard |
| 9 | SPOJ IOPC14H — Hard Partition (Deque DP) | SPOJ | Hard |
| 10 | Minimum Jump Cost with Window Constraint | GFG | Hard |

---

### 15.5 Knuth's Optimization

> **When to use:** Interval DP dp[i][j] = min over i≤k<j of (dp[i][k] + dp[k+1][j] + cost(i,j)) where cost satisfies quadrangle inequality.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Matrix Chain Multiplication (Knuth Optimized) | GFG | Hard |
| 2 | Optimal BST (Knuth's Algorithm) | GFG | Hard |
| 3 | Stone Merging (Min Cost Merge Adjacent) | GFG | Hard |
| 4 | Codeforces 321E — Ciel and Gondolas | Codeforces | Hard |
| 5 | POJ 1738 — An old Stone Game | POJ | Hard |
| 6 | SPOJ MIXTURES — Merging Mixtures | SPOJ | Hard |
| 7 | Minimum Total Cost of Merging Files | GFG | Hard |
| 8 | Codeforces 1017C — The Phone Number (Knuth variant) | Codeforces | Hard |
| 9 | Constructing Optimal Huffman-like Tree | GFG | Hard |
| 10 | POJ 2478 — Farey Sequence (Knuth) | POJ | Hard |

---

## 16. Miscellaneous / Mixed Patterns

> These problems blend multiple DP techniques or introduce novel state definitions not easily categorized above.

---

### 16.1 Profile / Broken Profile DP

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Tiling a 2×N Board with Dominoes | GFG | Medium |
| 2 | Count Tilings of M×N Board | GFG | Hard |
| 3 | Codeforces 3D — Least Cost Bracket Sequence | Codeforces | Hard |
| 4 | Domino Tiling of 4×N Board | GFG | Hard |
| 5 | Codeforces 226E — Noble Knight's Path | Codeforces | Hard |
| 6 | USACO — Fence Repair (Profile DP variant) | USACO | Hard |
| 7 | Codeforces 1527E — Counting Colorings | Codeforces | Hard |
| 8 | Counting Rectangles Tilings (Profile DP) | GFG | Hard |
| 9 | Grid Tiling with T-Pieces | GFG | Hard |
| 10 | Codeforces 2B — The least round way | Codeforces | Medium |

---

### 16.2 DP on Subsets (SOS — Sum Over Subsets)

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Sum Over Subsets DP | Codeforces (Tutorial) | Medium |
| 2 | Count Subsets with OR = Target | GFG | Medium |
| 3 | Minimum XOR Sum of Two Arrays | LeetCode #1879 | Hard |
| 4 | Number of Subsets with AND = 0 | GFG | Medium |
| 5 | Count Subsets Divisible by K | GFG | Medium |
| 6 | Minimum Cost to Connect Two Groups | LeetCode #1595 | Hard |
| 7 | Count Submasks of All Masks | GFG | Medium |
| 8 | Maximum AND Sum of Array | LeetCode #2172 | Hard |
| 9 | Maximize Total Tastiness of Purchased Items | GFG | Hard |
| 10 | Codeforces 165E — Compatible Numbers (SOS) | Codeforces | Hard |

---

### 16.3 DP on Permutations / Counting

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count Derangements | GFG | Medium |
| 2 | Count Permutations with Given Inversions | GFG | Medium |
| 3 | Number of Squareful Arrays | LeetCode #996 | Hard |
| 4 | Count Permutations with k Inversions | GFG | Medium |
| 5 | Permutations Without Forbidden Patterns | GFG | Hard |
| 6 | Count of Permutations of First N having Prime K | GFG | Hard |
| 7 | Count Distinct Subsequences | LeetCode #940 | Hard |
| 8 | Lexicographically Smallest Permutation of DP | GFG | Hard |
| 9 | Count of Permutations Preserving BST Structure | GFG | Hard |
| 10 | Codeforces 280D — k-Maximum Subsequence Sum | Codeforces | Hard |

---

### 16.4 DP with Data Structures (BIT/Segment Tree)

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count of Range Sum | LeetCode #327 | Hard |
| 2 | Reverse Pairs | LeetCode #493 | Hard |
| 3 | Count Smaller Numbers After Self | LeetCode #315 | Hard |
| 4 | LIS Count using Fenwick Tree | GFG | Hard |
| 5 | Minimum Operations to Make Array Sorted (BIT+DP) | GFG | Hard |
| 6 | Codeforces 369E — Valera and Queries | Codeforces | Hard |
| 7 | Number of Inversions (Merge Sort / BIT) | LeetCode #315 | Hard |
| 8 | Dynamic Segment Tree with DP | Codeforces | Hard |
| 9 | Maximum Weighted Closure of DAG | GFG | Hard |
| 10 | Codeforces 380C — Sereja and Brackets (Segment Tree DP) | Codeforces | Hard |

---

### 16.5 DP on Intervals with Merging

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Burst Balloons | LeetCode #312 | Hard |
| 2 | Remove Boxes | LeetCode #546 | Hard |
| 3 | Strange Printer | LeetCode #664 | Hard |
| 4 | Zuma Game | LeetCode #546 (variant) | Hard |
| 5 | Minimum Cost to Merge Stones | LeetCode #1000 | Hard |
| 6 | Weird Printer II | LeetCode #1591 | Hard |
| 7 | Minimum Score Triangulation of Polygon | LeetCode #1039 | Medium |
| 8 | Count Ways to Build Good Strings | LeetCode #2466 | Medium |
| 9 | SPOJ CMEXPR — Count Parenthesizations | SPOJ | Hard |
| 10 | Codeforces 41D — Tetris 3D (3D interval DP) | Codeforces | Hard |

---

### 16.6 Swap-Based DP

> **Core Idea:** At each index/step, you decide whether to **swap** elements between two arrays/sequences or keep them as-is. The DP state encodes the current index + whether a swap was performed at the previous step. Classic for "make both arrays satisfy property X" problems.

> **State Template:** `dp[i][0]` = optimal cost at index i with **no swap** at i; `dp[i][1]` = optimal cost at index i **with swap** at i.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Minimum Swaps to Make Sequences Increasing | LeetCode #801 | Hard |
| 2 | Make Array Strictly Increasing | LeetCode #1187 | Hard |
| 3 | Minimum Number of Swaps to Make the String Balanced | LeetCode #1963 | Medium |
| 4 | Swap Adjacent in LR String | LeetCode #777 | Medium |
| 5 | Minimum Adjacent Swaps for K Consecutive Ones | LeetCode #1703 | Hard |
| 6 | Minimum Swaps to Sort Array (Cycle Detection + DP) | GFG | Medium |
| 7 | Minimum Cost to Make Two Arrays Equal by Swapping | GFG | Medium |
| 8 | Minimum Swaps to Make Two Arrays Identical | GFG | Medium |
| 9 | Count Minimum Swaps to Sort a Permutation | Codeforces | Hard |
| 10 | Minimum Swaps to Arrange Brackets Correctly | GFG | Hard |

**Deep Dive — LeetCode #1187 (Make Array Strictly Increasing):**
> Given arrays `arr1` and `arr2`, at each index you may replace `arr1[i]` with any element from `arr2`. Find minimum operations to make `arr1` strictly increasing. This is a **coordinate-compressed LIS + binary search DP** — not purely "swap" in the #801 sense, but belongs here because the core decision at each step is *replace or keep*.
> - State: `dp[i][v]` = min ops to make `arr1[0..i]` strictly increasing where `arr1[i]` is now value `v`
> - Transition: binary search `arr2` for smallest valid replacement; use sorted+deduped `arr2`
> - Complexity: O(n · m · log m) where m = len(arr2)

---

## 17. Advanced DP Optimizations (CP Hard Tier)

> These are the techniques that separate Codeforces Expert from Candidate Master and beyond. Each requires both mathematical insight and implementation precision.

---

### 17.1 Alien's Trick (WQS Binary Search / Lambda Optimization)

> **Core Idea:** When you have a DP of the form "pick exactly K items to optimize a cost" and the DP is O(N²K) or O(NK), you can drop the K constraint and add a penalty λ per item chosen. Binary search on λ until the unconstrained solution naturally picks exactly K items. Reduces one dimension from the DP.
>
> **When to use:** The optimal cost as a function of K is **convex** (concave for max). Penalty λ is the slope at K.
>
> **Template:** `dp_with_penalty(λ)` → find λ* such that optimal count = K → answer = `dp_with_penalty(λ*) + λ* × K`

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Best Time to Buy and Sell Stock IV (WQS approach) | LeetCode #188 | Hard |
| 2 | Minimum White Tiles After Covering With Carpets | LeetCode #2209 | Hard |
| 3 | Minimize the Total Price of the Trips | LeetCode #2646 | Hard |
| 4 | Codeforces 1603E — Escape the Maze (WQS) | Codeforces 1603E | Hard (CF 2600) |
| 5 | USACO 2016 Landscaping (Alien's Trick) | USACO | Hard |
| 6 | IOI 2016 Aliens (the original problem) | IOI 2016 | Legendary |
| 7 | Codeforces 739E — Gosha is Hunting (WQS) | Codeforces 739E | Hard (CF 2900) |
| 8 | Codeforces 321C — Ciel and Robot (WQS variant) | Codeforces 321C | Hard |
| 9 | Minimum Cost to Cut Chocolate Bar (K cuts, WQS) | GFG | Hard |
| 10 | Maximum Score from K Operations (WQS on sorted structure) | LeetCode #2530 | Medium |

---

### 17.2 Slope Trick

> **Core Idea:** When a DP array `dp[i][v]` (over values v) forms a **piecewise linear convex function**, you don't store the full array. Instead, maintain the **slopes** (as a sorted multiset/priority queue of breakpoints). Transitions like "increment all values by cost" or "take min with a shifted copy" become O(log N) heap operations.
>
> **Key Operations:** Push a breakpoint (slope changes by 1), pop the largest slope (prefix min), shift the function.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Minimum Number of Moves to Seat Everyone | LeetCode #2037 | Easy (intro to concept) |
| 2 | Make Array Non-decreasing (Slope Trick intro) | GFG | Medium |
| 3 | Non-decreasing Array with Min Cost | GFG | Medium |
| 4 | Codeforces 713C — Sonya and Problem Without a Legend | Codeforces 713C | Hard (CF 2100) |
| 5 | LeetCode #2263 — Make Array Non-decreasing or Non-increasing | LeetCode #2263 | Hard |
| 6 | Codeforces 1601D — Difficult Mountain (Slope Trick) | Codeforces 1601D | Hard |
| 7 | Minimum Cost to Make Array Non-decreasing with Weights | GFG | Hard |
| 8 | Codeforces 660F — Bear and Bowling (Slope Trick + CHT) | Codeforces 660F | Hard (CF 3100) |
| 9 | USACO 2016 Landscaping (Slope Trick variant) | USACO | Hard |
| 10 | Codeforces 436E — Cardboard Banners | Codeforces 436E | Hard (CF 2700) |

---

### 17.3 Hirschberg's Algorithm (Space-Optimized Sequence DP)

> **Core Idea:** Compute the actual **alignment/sequence** (not just the length) of LCS or Edit Distance in O(N) space instead of O(NM). Uses Divide & Conquer: split the problem at the midpoint of one string, use two forward/backward passes (each O(N) space) to find the optimal split point, then recurse.
>
> **Complexity:** O(NM) time, O(N) space. Essential for very large inputs where storing the full DP table is infeasible.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Edit Distance (space-optimized, O(N) space) | LeetCode #72 | Hard |
| 2 | Shortest Common Supersequence (reconstruct, Hirschberg) | LeetCode #1092 | Hard |
| 3 | Longest Common Subsequence (reconstruct, O(N) space) | LeetCode #1143 | Hard |
| 4 | LCS of Large Strings (N, M up to 10^6) | GFG | Hard |
| 5 | Sequence Alignment with Gap Penalties (bioinformatics) | GFG | Hard |
| 6 | Print Edit Distance Sequence (Hirschberg) | GFG | Hard |
| 7 | Minimum Edit Operations with Reconstruction in O(N) space | GFG | Hard |
| 8 | Needleman-Wunsch (Hirschberg variant for global alignment) | GFG | Hard |
| 9 | Smith-Waterman (local alignment, Hirschberg) | GFG | Hard |
| 10 | Hirschberg on General Affine Gap Cost | GFG | Hard |

---

## 18. DP on String Automata

> **Core Idea:** Build a string automaton (Aho-Corasick for multiple patterns, or a Trie for XOR/prefix patterns), then run DP where the **state includes the current automaton node**. This converts complex string constraints into clean graph traversal + DP.

---

### 18.1 DP on Aho-Corasick Automaton

> **Core Idea:** Build Aho-Corasick from a set of forbidden/required patterns. DP states = (position in generated string, current AC node, tight constraint). Count strings of length N that avoid/contain given patterns.
>
> **State:** `dp[len][node]` = number of strings of length `len` ending at `node` in the AC automaton (not passing through any forbidden terminal node via suffix links).

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count strings of length N not containing a pattern | GFG | Medium |
| 2 | Count binary strings with no occurrence of "010" | GFG | Medium |
| 3 | Codeforces 86C — Andrey and a Time Machine (AC DP) | Codeforces 86C | Hard (CF 2200) |
| 4 | Codeforces 696D — Legen… (Count strings via AC automaton DP) | Codeforces 696D | Hard (CF 2400) |
| 5 | Count strings of length N avoiding all words in dictionary | GFG | Hard |
| 6 | Codeforces 1202E — You Need to Solve a Shorter Problem | Codeforces 1202E | Hard (CF 2500) |
| 7 | Count DNA strands of length N without forbidden codons | GFG | Hard |
| 8 | Codeforces 235C — Cyclical Quest (AC + DP) | Codeforces 235C | Hard |
| 9 | Count words of length N in language defined by multiple patterns | GFG | Hard |
| 10 | Codeforces 1017E — The Fibonacci Experiments (AC DP + Matrix) | Codeforces 1017E | Hard (CF 2800) |

---

### 18.2 DP on Trie

> **Core Idea:** Trie nodes serve as DP states — most commonly in XOR maximization (binary trie) or prefix-based counting. DP transitions follow trie edges bit-by-bit.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Maximum XOR of Two Numbers in Array (Trie traversal) | LeetCode #421 | Medium |
| 2 | Maximum XOR With an Element From Array | LeetCode #1707 | Hard |
| 3 | Maximum XOR of Elements in a Subarray | GFG | Hard |
| 4 | Count Pairs with XOR in Given Range (Trie + DP) | GFG | Hard |
| 5 | Codeforces 665E — Beautiful Subarrays (Trie DP) | Codeforces 665E | Hard (CF 2400) |
| 6 | Maximum Subarray XOR (Gaussian Elimination meets Trie) | GFG | Hard |
| 7 | Count Distinct XOR Subsequences (Trie DP) | GFG | Hard |
| 8 | Codeforces 706D — Vasiliy's Multiset (Online Trie) | Codeforces 706D | Hard |
| 9 | Minimum XOR of Subsets using Trie + DP | GFG | Hard |
| 10 | Codeforces 871D — Persistent Trie + DP | Codeforces 871D | Hard (CF 2700) |

---

## 19. Ultra-Advanced Niche Patterns

---

### 19.1 Plug DP (Broken Profile with Connectivity)

> **Core Idea:** Extension of profile DP for problems involving **Hamiltonian paths/cycles on grids**. The bitmask doesn't just store filled/unfilled — it encodes the **connectivity** of path endpoints using a "plug state" (which plugs are connected to each other). Uses Union-Find encoding of connections within the profile.
>
> **Complexity:** O(N × M × States) where States can be up to the Bell number B(2K) for width K.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count Hamiltonian Paths in Grid (small) | GFG | Hard |
| 2 | Codeforces 8E — Rotate Columns (Profile meets Plug concept) | Codeforces 8E | Hard |
| 3 | Tiling a Grid with L-Trominoes (Plug DP) | GFG | Hard |
| 4 | SPOJ TURING — Turing's Formula (Plug DP) | SPOJ | Hard |
| 5 | Codeforces — Formula 1 (Hamiltonian Cycle on Grid) | Codeforces | Legendary |
| 6 | Grid with Exactly One Hamiltonian Path | GFG | Hard |
| 7 | USACO 2014 Dec — Guard Mark (Plug DP variant) | USACO | Hard |
| 8 | Count Perfect Matchings in Grid (Plug DP) | GFG | Hard |
| 9 | Count number of routes through all cells of grid exactly once | GFG | Hard |
| 10 | Codeforces 91B — Queue (Plug DP connectivity) | Codeforces 91B | Hard |

---

### 19.2 DP on Divisors (Number Theoretic DP)

> **Core Idea:** DP states transition via **divisibility relationships** rather than adjacent indices. Iteration over divisors or multiples, often combined with Dirichlet convolution / Euler sieve. Counts multiplicative structures.
>
> **State Examples:** `dp[d]` = number of arrays where each element divides the next, and the last element is d.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Count Arrays Where Each Element Divides Next (length N, max M) | GFG | Medium |
| 2 | Count Divisible Arrays of Length N | Codeforces | Medium |
| 3 | Smallest Number Divisible by K | LeetCode #1015 | Medium |
| 4 | Counting Divisors in Range (Number Sieve DP) | GFG | Medium |
| 5 | Codeforces 1033D — Divisors (Multiplicative DP) | Codeforces 1033D | Hard (CF 2200) |
| 6 | Codeforces 1017D — The Towers (Divisor DP) | Codeforces 1017D | Hard |
| 7 | Count Numbers up to N with Exactly K Divisors | GFG | Hard |
| 8 | Minimum Cost Path via Prime Factorization DP | GFG | Hard |
| 9 | Codeforces 986F — Oppa Funcan Style Remastered (Divisor DP) | Codeforces 986F | Hard (CF 3000) |
| 10 | Codeforces 1103E — Radix Sort (Dirichlet DP) | Codeforces 1103E | Hard (CF 2800) |

---

### 19.3 Tree Knapsack O(N²) — Subtree Merge Optimization

> **Core Idea:** The naive "merge child DPs" in tree knapsack is O(N³) total if done carelessly. The key insight: bound the inner loop by the **current subtree size** at each node. This amortizes to O(N²) total because each pair of nodes (u, v) is "merged" at most once — at their LCA.
>
> **This is different from standard tree DP** — it applies when you're doing knapsack-style merging (e.g., "choose exactly K nodes from the tree").

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Select K Nodes from Tree to Maximize Sum | GFG | Hard |
| 2 | Codeforces 1017E — The Fibonacci Experiments (Tree Knapsack) | Codeforces 1017E | Hard |
| 3 | Codeforces 161D — Distance in Tree (Tree DP, N² amortized) | Codeforces 161D | Hard (CF 1900) |
| 4 | Maximum Weight Closure of DAG (Tree Knapsack) | GFG | Hard |
| 5 | Codeforces 815C — Karen and Supermarket (Tree Knapsack) | Codeforces 815C | Hard (CF 2800) |
| 6 | Select K Subtrees with Maximum Sum, No Two Adjacent | GFG | Hard |
| 7 | Codeforces 1249F — Maximum Weight Subset (Tree Knapsack) | Codeforces 1249F | Hard (CF 2400) |
| 8 | Distribute Budget Among Departments (Tree + Knapsack) | GFG | Hard |
| 9 | Codeforces 1017C — The Phone Number (Tree Knapsack O(N²)) | Codeforces 1017C | Hard |
| 10 | USACO 2019 Platinum — Talent Show (WQS + Tree Knapsack) | USACO | Legendary |

---

## 20. Dynamic DP (Online Updates)

> **Core Idea:** You have a DP (e.g., max subarray sum, LIS count, etc.), but after computing it, **individual elements are updated** and you must recompute the answer in O(log² N) or O(log N) per update instead of O(N). Typically achieved by maintaining **matrix products over segment trees** or using **Heavy-Light Decomposition** for tree DPs.
>
> **Why matrices?** Many DP recurrences are linear in a (min, +) or (max, +) semiring. These can be expressed as matrix multiplications, and a segment tree over these matrices gives O(log N) updates.

---

### 20.1 Segment Tree + Matrix for Linear Recurrences

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Dynamic Maximum Subarray (point updates) | Codeforces | Hard |
| 2 | Codeforces 380C — Sereja and Brackets (Segment Tree DP) | Codeforces 380C | Hard (CF 2000) |
| 3 | Count Valid Bracket Sequences with Updates | GFG | Hard |
| 4 | Codeforces 1097G — Vladislav and a Great Game (Dynamic DP) | Codeforces 1097G | Hard (CF 3000) |
| 5 | Dynamic LCS (with character replacements) | GFG | Hard |
| 6 | Codeforces 1603F — September 7th | Codeforces 1603F | Hard |
| 7 | Maximum Sum Subarray with Point Updates (Seg Tree over (max,+)) | GFG | Hard |
| 8 | Count Palindromic Substrings with Character Updates | GFG | Hard |
| 9 | Range DP with Updates (Interval flip) | GFG | Hard |
| 10 | Codeforces 343D — Water Tree (Dynamic DP on Tree) | Codeforces 343D | Hard |

---

### 20.2 Dynamic DP on Trees (HLD + Matrix Exponentiation)

> **Core Idea:** For tree DPs that change when an edge/node weight is updated, re-compute along the **Heavy-Light Decomposition path** using matrix products stored in a segment tree. O(log² N) per update.

| # | Problem Name | Platform | Difficulty |
|---|---|---|---|
| 1 | Dynamic House Robber on Tree (node weight updates) | GFG | Hard |
| 2 | Codeforces 1017E — HLD + Matrix Tree DP | Codeforces 1017E | Hard |
| 3 | Maximum Independent Set on Tree with Updates | GFG | Hard |
| 4 | Codeforces 1188F — Crossword Expert (HLD + DP) | Codeforces 1188F | Hard (CF 2700) |
| 5 | Dynamic Tree Coloring DP (HLD Matrix) | GFG | Hard |
| 6 | Codeforces 1172F — Nauuo and Dumbbell (Dynamic DP Tree) | Codeforces 1172F | Hard (CF 2900) |
| 7 | Maximum Matching on Dynamic Tree | GFG | Hard |
| 8 | Sum of LIS on Path Between Nodes (HLD + DP) | GFG | Hard |
| 9 | Codeforces 916E — Jamie and Tree (Dynamic Tree DP) | Codeforces 916E | Hard |
| 10 | Tree DP with Multiple Root Changes and Node Updates | Codeforces | Legendary |

---

## 📊 Summary: Total Problem Count by Pattern

| Pattern | Sub-patterns | Total Problems |
|---|---|---|
| 1D DP | 5 | 50 |
| Multidimensional DP | 3 | 30 |
| DP on Grids | 3 | 30 |
| DP on Strings | 5 | 50 |
| Knapsack Variations | 4 | 40 |
| DP on Trees | 4 | 40 |
| DP on Graphs/DAGs | 2 | 20 |
| DP with Bitmasking | 3 | 30 |
| Digit DP | 2 | 20 |
| DP with Binary Search | 2 | 20 |
| Interval / Range DP | 3 | 30 |
| Partition DP | 2 | 20 |
| Game Theory DP | 3 | 30 |
| Probability / Expected Value DP | 2 | 20 |
| DP Optimizations (Classic) | 5 | 50 |
| Miscellaneous / Mixed | 6 | 60 |
| **Advanced Optimizations (CP Hard)** | **3** | **30** |
| **DP on Automata** | **2** | **20** |
| **Ultra-Advanced Niche** | **3** | **30** |
| **Dynamic DP (Online Updates)** | **2** | **20** |
| **TOTAL** | **68** | **~640** |

---

## 🗺️ Recommended Study Order

```
Phase 1 — Foundation (2-3 weeks)
  → 1D DP (all sub-patterns)
  → Knapsack 0/1 and Unbounded
  → DP on Grids (path counting + min/max cost)

Phase 2 — Intermediate (3-4 weeks)
  → DP on Strings (LCS, Edit Distance, Palindrome)
  → Interval / Range DP
  → Partition DP
  → Multidimensional DP

Phase 3 — Advanced Patterns (3-4 weeks)
  → DP on Trees (all sub-patterns, re-rooting)
  → DP on Graphs/DAGs
  → DP with Binary Search
  → Game Theory DP

Phase 4 — Expert (4-6 weeks)
  → DP with Bitmasking
  → Digit DP
  → Probability/Expected Value DP
  → Miscellaneous (Profile, SOS, Permutation DPs)

Phase 5 — Optimizations (Ongoing)
  → Monotonic Queue / Deque Optimization
  → Divide & Conquer Optimization
  → Convex Hull Trick / Li Chao Tree
  → Knuth's Optimization
  → Matrix Exponentiation
```

---

## 💡 Key Mindset Tips

1. **Define state clearly first.** Before writing any code, explicitly state what `dp[i]`, `dp[i][j]`, or `dp[mask][i]` represents.
2. **Identify the recurrence.** Ask: what transitions lead to this state? What sub-problems compose it?
3. **Determine base cases.** Often the trickiest part — handle empty arrays, zero sums, and boundary conditions explicitly.
4. **Check order of evaluation.** Bottom-up requires correct fill order; top-down (memoization) handles this automatically.
5. **Optimize last.** First write the exponential brute-force, then memoize, then tabulate, then optimize space/time.
6. **For optimizations:** Only apply CHT, D&C, or Knuth after clearly identifying the mathematical property that enables them.

---

*Document generated as a comprehensive DP mastery guide. Platforms: LC = LeetCode, CF = Codeforces, GFG = GeeksforGeeks.*
