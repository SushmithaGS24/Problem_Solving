class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function deleteHead(head) {
    if(!head){
        return;
    }
    return head.next;
}

function traversal(list){
    let result = [];
    let current = list;
    while(current){
        result.push(current.data);
        current = current.next;
    }
    return result;
}

const linkedList = new Node(5, new Node(4, new Node(3, new Node(2))));

const list = deleteHead(linkedList);
console.log(traversal(list));