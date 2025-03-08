class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function reverse(list) {
    let prev = null;
    let current = list;

    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
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

const list = reverse(linkedList);
console.log(traversal(list));