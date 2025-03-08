class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function deleteSpecific(list, ele){
    let current = list;
    if(!list){
        return null;
    }
    if(current.data === ele){
        return list.next;
    }
    while(current && current.next.data !== ele){
        current = current.next;
    }
  
    current.next = current.next.next;
    return list;


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

const list = deleteSpecific(linkedList, 2);
console.log(traversal(list));