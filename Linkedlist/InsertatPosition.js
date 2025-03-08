class Node {

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function insert(head, ele, pos){
    let current = head;
    if(!head) {
        return new Node(ele);
    }
    if(pos === 1){
        return new Node(ele, head);
    }
    let count = 0;

    while(current && count < pos - 1 ) {
        current = current.next;
        count++;
    }

    const newNode = new Node(ele, current.next);
    current.next = newNode;
    return head;

}


function traversal (list){
    let result = [];
    let current = list;
    while(current){
        result.push(current.data);
        current = current.next;
    }

    return result;
}


const linked = new Node(5, new Node(6, new Node(7, new Node(8))));
const list = insert(linked, 3, 2);
console.log(traversal(list));