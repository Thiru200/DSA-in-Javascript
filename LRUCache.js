class Node{
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LRU{
    constructor() {
        this.capacity=0;
        this.count=0;
        this.head = null;
        this.tail = null;
        this.map = new Map();
    }
    setter(cap) {
        this.capacity = cap;
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.head.prev = null;
        this.tail.next = null;
    }
    deleteNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    addToNode(node) {
        node.next = this.head.next;
        node.next.prev = node;
        node.prev = this.head;
        this.head.next = node;
    }
    get(key) {      
        if (this.map.get(key) != null) {
            let MyNode = this.map.get(key);
            this.deleteNode(MyNode);
            this.addToNode(MyNode);
            return MyNode.value;
        }
        return -1;
    }
    set(key, value) {
        
        if (this.map.get(key) != null) {
            let myNode = this.map.get(key);
            this.map.delete(key);
            this.deleteNode(myNode);
            myNode = new Node(key, value);
            this.map.set(key, myNode);
            this.addToNode(myNode);
            
            this.count++;
        }
        else {
            let myNode = new Node(key, value);
           
            if (this.count < this.capacity) {
                this.count++;
                this.map.set(key, myNode);
                this.addToNode(myNode);
            }
            else {
                this.map.delete(this.tail.prev.key);
                this.deleteNode(this.tail.prev);
                this.map.set(key, myNode);
                this.addToNode(myNode);
            }
        }
    }
}
