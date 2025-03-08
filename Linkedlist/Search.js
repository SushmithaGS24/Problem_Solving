class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function search(head, ele){
    let current = head;
    while(current){
        if(current.data === ele){
            return true;
        }
        current = current.next;
    }
    return false;
}

const list = new Node(3, new Node(4, new Node(6, new Node(8))));
console.log(search(list, 3));
