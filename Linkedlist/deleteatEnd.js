class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function deleteTail(head){
    let current = head;
    if(!head) {
        return null;
    }
    while(current.next.next){
        current = current.next;
    }
    current.next = null;

   return head;

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

const list = deleteTail(linkedList);
console.log(traversal(list));


