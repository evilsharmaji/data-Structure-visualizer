class VisualNode {
    constructor(value, x, y) {
        this.value = value
        this.x = x
        this.y = y
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(canvas) {
        this.root = null
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
    }

    insert(value) {
        const insertNode = (node, value, x, y, gap) => {
            if (!node) return new VisualNode(value, x, y)

            if (value < node.value)
                node.left = insertNode(node.left, value, x - gap, y + 70, gap / 1.7)
            else
                node.right = insertNode(node.right, value, x + gap, y + 70, gap / 1.7)

            return node
        }

        this.root = insertNode(
            this.root,
            value,
            this.canvas.width / 2,
            60,
            180
        )

        this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        const drawNode = node => {
            if (!node) return

            if (node.left) this.drawEdge(node, node.left)
            if (node.right) this.drawEdge(node, node.right)

            this.drawCircle(node)

            drawNode(node.left)
            drawNode(node.right)
        }

        drawNode(this.root)
    }

    drawCircle(node) {
        this.ctx.beginPath()
        this.ctx.arc(node.x, node.y, 22, 0, Math.PI * 2)
        this.ctx.fillStyle = "#00f5ff"
        this.ctx.fill()
        this.ctx.strokeStyle = "#0ff"
        this.ctx.stroke()

        this.ctx.fillStyle = "#000"
        this.ctx.font = "14px Arial"
        this.ctx.textAlign = "center"
        this.ctx.fillText(node.value, node.x, node.y + 5)
    }

    drawEdge(parent, child) {
        this.ctx.beginPath()
        this.ctx.moveTo(parent.x, parent.y)
        this.ctx.lineTo(child.x, child.y)
        this.ctx.strokeStyle = "#00f5ff"
        this.ctx.stroke()
    }
}

class GraphVisualizer {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.nodes = []
        this.edges = []
    }

    addNode(x, y) {
        this.nodes.push({ x, y })
        this.draw()
    }

    addEdge(i, j) {
        this.edges.push([i, j])
        this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // Draw edges
        this.edges.forEach(([i, j]) => {
            const a = this.nodes[i]
            const b = this.nodes[j]

            this.ctx.beginPath()
            this.ctx.moveTo(a.x, a.y)
            this.ctx.lineTo(b.x, b.y)
            this.ctx.strokeStyle = "#00f5ff"
            this.ctx.stroke()
        })

        // Draw nodes
        this.nodes.forEach(n => {
            this.ctx.beginPath()
            this.ctx.arc(n.x, n.y, 20, 0, Math.PI * 2)
            this.ctx.fillStyle = "#ff00ff"
            this.ctx.fill()
        })
    }

    BFS(start) {
        let visited = new Set()
        let queue = [start]

        const step = () => {
            if (!queue.length) return

            const node = queue.shift()
            visited.add(node)

            this.highlight(node)

            this.edges.forEach(([a, b]) => {
                if (a === node && !visited.has(b)) queue.push(b)
                if (b === node && !visited.has(a)) queue.push(a)
            })

            setTimeout(step, 700)
        }

        step()
    }

    highlight(index) {
        const n = this.nodes[index]

        this.ctx.beginPath()
        this.ctx.arc(n.x, n.y, 24, 0, Math.PI * 2)
        this.ctx.strokeStyle = "yellow"
        this.ctx.lineWidth = 4
        this.ctx.stroke()
    }
}
