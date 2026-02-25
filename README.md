# 📘 Data Structure Visualizer

An interactive web-based **Data Structure Visualizer** designed to build deep intuition about fundamental data structures through animated visual simulations.

This project visually demonstrates how major data structures work internally and how core algorithms operate step-by-step.

---

## 🚀 Features

- Interactive Canvas Visualization
- Adjustable Speed Control
- Algorithm Explanation Panel
- Time & Space Complexity Display
- Pseudocode Display
- Start / Pause / Reset Controls
- Modern UI with Animated Background

---

# 📚 Implemented Data Structures & Algorithms

---

## 1️⃣ Array

### Algorithms Implemented
- Traversal
- Linear Search
- Insertion

### Visualization
- Elements displayed as horizontal blocks
- Current index highlighted during traversal/search
- Insertion visually adds a new element
- Sequential scanning animation

### Algorithms Used

**Traversal**
```
for i = 0 to n-1
   print(arr[i])
```
Time Complexity: O(n)  
Space Complexity: O(1)

**Linear Search**
```
for i = 0 to n-1
   if arr[i] == target
       return i
```
Time Complexity: O(n)

**Insertion (End)**
```
arr[n] = newValue
```
Time Complexity: O(1)

---

## 2️⃣ Stack (LIFO)

### Algorithms Implemented
- Push
- Traversal

### Visualization
- Vertical blocks
- Top element highlighted
- Push operation adds element to the top

### Algorithms Used

**Push**
```
top = top + 1
stack[top] = value
```
Time Complexity: O(1)

**Traversal**
```
for i = top down to 0
   print(stack[i])
```
Time Complexity: O(n)

---

## 3️⃣ Queue (FIFO)

### Algorithms Implemented
- Enqueue
- Traversal

### Visualization
- Horizontal structure
- Front → Rear direction
- Traversal highlights elements sequentially

### Algorithms Used

**Enqueue**
```
rear = rear + 1
queue[rear] = value
```
Time Complexity: O(1)

**Traversal**
```
for i = front to rear
   print(queue[i])
```
Time Complexity: O(n)

---

## 4️⃣ Linked List

### Algorithms Implemented
- Insertion
- Traversal

### Visualization
- Nodes displayed as boxes
- Arrows connecting nodes
- New node highlighted during insertion

### Algorithms Used

**Insertion**
```
newNode.next = prev.next
prev.next = newNode
```
Time Complexity: O(1)

**Traversal**
```
node = head
while node != null
   print(node.data)
   node = node.next
```
Time Complexity: O(n)

---

## 5️⃣ Hash Table

### Algorithms Implemented
- Insertion using Hash Function

### Visualization
- Key-value pairs displayed in indexed slots
- Hash function maps keys to index
- Collision handled conceptually (chaining)

### Algorithm Used

```
index = hash(key)

if table[index] is empty
   table[index] = value
else
   add to chain
```

Average Time Complexity: O(1)  
Worst Case: O(n)

---

## 6️⃣ Binary Search Tree (BST)

### Algorithms Implemented
- Insertion
- Inorder Traversal

### Visualization
- Tree drawn dynamically on canvas
- Left child < Parent < Right child
- Recursive insertion structure

### Algorithms Used

**Insertion**
```
if value < node.value
   insert in left subtree
else
   insert in right subtree
```

Average Time Complexity: O(log n)  
Worst Case: O(n)

**Inorder Traversal**
```
inorder(node):
   inorder(node.left)
   print(node.value)
   inorder(node.right)
```

Time Complexity: O(n)

---

# 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- HTML5 Canvas API

---

# 🎯 Objective

This project is built to:

- Strengthen algorithmic thinking
- Provide visual intuition for DSA concepts
- Help students understand internal working of data structures
- Bridge theory with interactive simulation

---

# 🧩 Future Enhancements

- Sorting Algorithms (Bubble, Merge, Quick)
- Graph Algorithms (BFS, DFS, Dijkstra)
- AVL Tree / Red-Black Tree
- User input customization
- Dark/Light theme toggle

---

# 👨‍💻 Author

Priyanshu Sharma  
Computer Science Student  

---

⭐ If you found this helpful, consider giving this project a star!