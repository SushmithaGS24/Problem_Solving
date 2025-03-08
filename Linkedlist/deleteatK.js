class Node{
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function deleteatK(list, K) {
    let counter = list;
    if(!list){
        return null;
    }
    if(K === 1){
        return list.next;
    }
    let count = 1;
    while(counter && count < K - 1){
        counter = counter.next;
        count++;

    }
   

    counter.next = counter.next.next;
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

const list = deleteatK(linkedList, 3);
console.log(traversal(list));