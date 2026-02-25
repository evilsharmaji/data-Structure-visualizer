const explainText = document.getElementById("explainText");
const complexityBox = document.getElementById("complexity");
const pseudoBox = document.getElementById("pseudo");

let currentTimeout = null;
let paused = false;

/* ===== LESSONS ===== */
function teach(step) {
  const lessons = {
    array_insert: { explanation: "Insert into array shifts elements to maintain order.", time: "O(n)", space: "O(1)", pseudo: "for i=n-1 downto pos:\n  arr[i+1]=arr[i]\narr[pos]=x" },
    array_search: { explanation: "Search scans sequentially until target is found.", time: "O(n)", space: "O(1)", pseudo: "for i=0 to n-1:\n  if arr[i]==x return i" },
    array_traversal: { explanation: "Traversal visits each element in order.", time: "O(n)", space: "O(1)", pseudo: "for i=0 to n-1:\n  print(arr[i])" },

    stack_push: { explanation: "Push adds element to top (LIFO).", time: "O(1)", space: "O(1)", pseudo: "top++\nstack[top]=x" },
    stack_traversal: { explanation: "Traversal visits elements from top to bottom.", time: "O(n)", space: "O(1)", pseudo: "for i=top downto 0:\n  print(stack[i])" },

    queue_enqueue: { explanation: "Enqueue adds element at rear (FIFO).", time: "O(1)", space: "O(1)", pseudo: "rear++\nqueue[rear]=x" },
    queue_traversal: { explanation: "Traversal visits elements from front to rear.", time: "O(n)", space: "O(1)", pseudo: "for i=front to rear:\n  print(queue[i])" },

    linked_insert: { explanation: "Insert adjusts pointers without shifting elements.", time: "O(1)", space: "O(1)", pseudo: "newNode.next=prev.next\nprev.next=newNode" },
    linked_traversal: { explanation: "Traversal follows next pointers sequentially.", time: "O(n)", space: "O(n)", pseudo: "node=head\nwhile node:\n  print(node.val)\n  node=node.next" },

    hash_insert: { explanation: "Insert uses hash function to compute index. Collisions handled by chaining.", time: "O(1) average, O(n) worst", space: "O(n)", pseudo: "index = hash(key)\nif table[index] empty:\n  table[index]=value\nelse:\n  chain at table[index]" },

    bst_insert: { explanation: "Insert compares key and goes left or right.", time: "O(log n) average, O(n) worst", space: "O(1)", pseudo: "if key<node:\n  insert left\nelse:\n  insert right" },
    bst_traversal: { explanation: "Traversal can be inorder, preorder, or postorder.", time: "O(n)", space: "O(n)", pseudo: "inorder(node):\n  inorder(left)\n  print(node)\n  inorder(right)" }
  };

  const lesson = lessons[step];
  if (!lesson) return;
  explainText.textContent = lesson.explanation;
  complexityBox.innerHTML = "Time: " + lesson.time + "<br>Space: " + lesson.space;
  pseudoBox.textContent = lesson.pseudo;
}

/* ===== CANVAS HELPERS ===== */
function clearCanvas() {
  const canvas = document.getElementById("visualCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* ===== VISUALIZATION FUNCTIONS ===== */
function visualizeArray(algorithm) {
  const canvas = document.getElementById("visualCanvas");
  const ctx = canvas.getContext("2d");
  const arr = [10, 20, 30, 40, 50];
  const startX = (canvas.width - arr.length * 80) / 2; // center horizontally

  if (algorithm === "Traversal") {
    let i = 0;
    function step() {
      if (paused) return;
      clearCanvas();
      arr.forEach((val, idx) => {
        ctx.fillStyle = idx === i ? "yellow" : "#38bdf8";
        ctx.fillRect(startX + idx * 80, 200, 60, 60);
        ctx.fillStyle = "white";
        ctx.fillText(val, startX + idx * 80 + 30, 235);
      });
      i++;
      if (i < arr.length) currentTimeout = setTimeout(step, 1000 / document.getElementById("speed").value);
    }
    step();
  } else if (algorithm === "Search") {
    const target = 30;
    let i = 0;
    function step() {
      if (paused) return;
      clearCanvas();
      arr.forEach((val, idx) => {
        ctx.fillStyle = idx === i ? "yellow" : "#38bdf8";
        ctx.fillRect(startX + idx * 80, 200, 60, 60);
        ctx.fillStyle = "white";
        ctx.fillText(val, startX + idx * 80 + 30, 235);
      });
      if (arr[i] === target) return;
      i++;
      if (i < arr.length) currentTimeout = setTimeout(step, 1000 / document.getElementById("speed").value);
    }
    step();
  } else if (algorithm === "Insertion") {
    clearCanvas();
    const newVal = 99;
    arr.push(newVal);
    arr.forEach((val, i) => {
      ctx.fillStyle = val === newVal ? "yellow" : "#38bdf8";
      ctx.fillRect(startX + i * 80, 200, 60, 60);
      ctx.fillStyle = "white";
      ctx.fillText(val, startX + i * 80 + 30, 235);
    });
  }
}

function visualizeStack(algorithm) {
  const canvas = document.getElementById("visualCanvas");
  const ctx = canvas.getContext("2d");
  let stack = [1, 2, 3];
  const startY = canvas.height / 2 + 100; // center vertically

  if (algorithm === "Insertion") {
    stack.push(4);
  }

  clearCanvas();
  stack.forEach((val, i) => {
    ctx.fillStyle = i === stack.length - 1 ? "yellow" : "#ff00ff";
    ctx.fillRect(canvas.width / 2 - 30, startY - i * 70, 60, 60);
    ctx.fillStyle = "white";
    ctx.fillText(val, canvas.width / 2, startY - i * 70 + 30);
  });
}

function visualizeQueue(algorithm) {
  const canvas = document.getElementById("visualCanvas");
  const ctx = canvas.getContext("2d");
  let queue = [5, 6, 7, 8];
  const startX = (canvas.width - queue.length * 80) / 2;

  if (algorithm === "Insertion") {
    queue.push(9);
  }

  if (algorithm === "Traversal") {
    let i = 0;
    function step() {
      if (paused) return;
      clearCanvas();
      queue.forEach((val, idx) => {
        ctx.fillStyle = idx === i ? "yellow" : "#00f5ff";
        ctx.fillRect(startX + idx * 80, 300, 60, 60);
        ctx.fillStyle = "black";
        ctx.fillText(val, startX + idx * 80 + 30, 335);
      });
      i++;
      if (i < queue.length) currentTimeout = setTimeout(step, 1000 / document.getElementById("speed").value);
    }
    step();
  } else {
    clearCanvas();
    queue.forEach((val, i) => {
      ctx.fillStyle = "#00f5ff";
      ctx.fillRect(startX + i * 80, 300, 60, 60);
      ctx.fillStyle = "black";
      ctx.fillText(val, startX + i * 80 + 30, 335);
    });
  }
}

function visualizeLinkedList(algorithm) {
  const canvas = document.getElementById("visualCanvas");
  const ctx = canvas.getContext("2d");
  let list = [11, 22, 33];
  const startX = (canvas.width - list.length * 120) / 2;

  if (algorithm === "Insertion") {
  list.push(44);
}

clearCanvas();
list.forEach((val, i) => {
  ctx.fillStyle = val === 44 ? "yellow" : "#38bdf8";
  ctx.fillRect(startX + i * 120, 150, 60, 60);
  ctx.fillStyle = "white";
  ctx.fillText(val, startX + i * 120 + 30, 185);

  // draw arrow to next node
  if (i < list.length - 1) {
    ctx.beginPath();
    ctx.moveTo(startX + i * 120 + 60, 180);
    ctx.lineTo(startX + (i + 1) * 120, 180);
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  }
});

}

function renderHash(algorithm) {
  const canvas = document.getElementById("visualCanvas");
  const ctx = canvas.getContext("2d");
  const table = {0: "A", 1: "B", 2: "C"};
  const startY = (canvas.height - Object.keys(table).length * 80) / 2;

  clearCanvas();
  Object.keys(table).forEach((key, i) => {
    ctx.fillStyle = "#ff00ff";
    ctx.fillRect(canvas.width / 2 - 40, startY + i * 80, 80, 60);
    ctx.fillStyle = "white";
    ctx.fillText(key + " : " + table[key], canvas.width / 2, startY + i * 80 + 35);
  });
}

function renderBST(algorithm) {
  const canvas = document.getElementById("visualCanvas");
  const bst = new BinarySearchTree(canvas);
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);
  // Traversal animation could be added here if desired
}

/* ===== BUTTON HANDLERS ===== */
document.getElementById("start").onclick = () => {
  const structure = document.getElementById("structure").value;
  const algorithm = document.getElementById("algorithm").value;

  paused = false;
  clearCanvas();

  switch (structure) {
    case "Array":
      visualizeArray(algorithm);
      if (algorithm === "Insertion") teach("array_insert");
      if (algorithm === "Search") teach("array_search");
      if (algorithm === "Traversal") teach("array_traversal");
      break;

    case "Stack":
      visualizeStack(algorithm);
      if (algorithm === "Insertion") teach("stack_push");
      if (algorithm === "Traversal") teach("stack_traversal");
      break;

    case "Queue":
      visualizeQueue(algorithm);
      if (algorithm === "Insertion") teach("queue_enqueue");
      if (algorithm === "Traversal") teach("queue_traversal");
      break;

    case "Linked List":
      visualizeLinkedList(algorithm);
      if (algorithm === "Insertion") teach("linked_insert");
      if (algorithm === "Traversal") teach("linked_traversal");
      break;

    case "Hash Table":
      renderHash(algorithm);
      if (algorithm === "Insertion") teach("hash_insert");
      break;

    case "Binary Search Tree":
      renderBST(algorithm);
      if (algorithm === "Insertion") teach("bst_insert");
      if (algorithm === "Traversal") teach("bst_traversal");
      break;

    default:
      alert("Structure not implemented yet");
  }
};

document.getElementById("pause").onclick = () => {
  paused = true;
  if (currentTimeout) clearTimeout(currentTimeout);
};

document.getElementById("reset").onclick = () => {
  paused = false;
  clearCanvas();
};
