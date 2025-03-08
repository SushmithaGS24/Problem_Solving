
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function main(){

    const arr = [1,2,3,4];
    const y1 = new Node(arr[0]);
    const y2 = new Node(arr[1]);
    const y3 = new Node(arr[2]);
    const y4 = new Node(arr[3]);

    y1.next = y2;
    y2.next = y3;
    y3.next = y4;

    function printNode(node) {
        console.log(`Data of this node is ${node.data}, its nect node  is ${node.next ? node.next.data : null} `);

    }

    printNode(y1);
    printNode(y2);
    printNode(y3);
    printNode(y4);
}

main();