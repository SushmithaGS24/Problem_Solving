class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function insert(list, ele){
   return new Node(ele, list);
   

}

const linked = new Node(5, new Node(6, new Node(7), new Node(8)));
console.log(insert(linked, 3));
