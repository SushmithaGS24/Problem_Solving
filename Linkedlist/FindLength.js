class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function lengthofList(head){
  let count = 0;
    let current = head;
    while(current) {
        count++;
        current = current.next;
    }
    return count;
}

const linkedList = new Node(5, new Node(4, new Node(3, new Node(2, new Node(1)))));
console.log(lengthofList(linkedList))