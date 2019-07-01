// YOUR CODE HERE
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(value){
        const node = new Node(value);
        if(!this.length){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length += 1;
    }
    addToHead(value){
        const node = new Node(value);
        if(this.head){
            this.head.next = node;
            node.previous = this.head;
        }
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
    }
    removeHead(){
        if(this.head){
            const headNode = this.head;
            this.head = this.head.next;
            this.head.previous = null;
            return headNode.value;
        }
    }
    removeTail(){

    }
    search(){

    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}