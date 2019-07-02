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
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
    }
    addToHead(value){
        const node = new Node(value);
        if(!this.length){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.length += 1
    }
    removeHead(){
        if(this.length === 0){
            return null;
        }else if(this.length === 1){
            const headNode = this.head;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return headNode.value;
        }else{
            const headNode = this.head;
            this.head = this.head.next;
            this.head.previous = null;
            this.length -= 1;
            return headNode.value;
        }
    }
    removeTail(){
        if(this.length === 0){
            return null;
        }else if(this.length === 1){
            const tailNode = this.tail;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return tailNode.value;
        }else{
            const tailNode = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;
            this.length -= 1;
            return tailNode.value;
        }
    }
    search(value){
        let node = this.head;
        let length = this.length;
        if(typeof value === 'function'){
            while(length){
                if(value(node.value)){
                    return node.value;
                }else{
                    node = node.next;
                    length -= 1;
                }
            }
        }
        while(length){
            if(node.value === value){
                return value;
            }else{
                node = node.next;
                length -= 1;
            }
        }
        return null
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}