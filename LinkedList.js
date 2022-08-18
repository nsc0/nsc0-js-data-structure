class LinkedList {
    constructor() {
        this.head = null
        this.count = 0
    }
    push(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        }
        else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    remove(index) {
        if (index < 0 || index >= this.count) return undefined
        let current = this.head
        if (index === 0) this.head = current.next
        else {
            let previous
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.count--
        return current.value ?? undefined
    }
    insert(value, index) {
        if (index < 0 || index > this.count) return undefined
        let current = this.head
        const node = new Node(value)
        if (index === 0) {
            node.next = current
            this.head = node
        } else {
            let previous
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        this.count++
    }
    reverse() {
        if (this.count === 0) return this.head
        let current = this.head
        let prevNode = null
        while (current !== null) {
            let nextNode = current.next
            current.next = prevNode
            prevNode = current
            current = nextNode
        }
        this.head = prevNode
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const linkedList = new LinkedList()
linkedList.push(6)
linkedList.push(7)
linkedList.push(8)
linkedList.push(9)
linkedList.reverse()
console.log(JSON.stringify(linkedList))

