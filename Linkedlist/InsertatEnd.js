class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function insert(list, ele) {
    let current= list;
    if(!list){
        return new Node(ele);
    }
    while(current.next) {
        current = current.next;
    }

    if(current.next === null){
         
           current.next =  new Node(ele);
           return list;
        }
        current = current.next;
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

    const linked = new Node(5, new Node(6, new Node(7), new Node(8)));
    const list = insert(linked, 3);
    console.log(traversal(list));

    

