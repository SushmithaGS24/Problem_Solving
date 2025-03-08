class ListNode{
    constructor(data = 0, next = null){
        this.data = data;
        this.next = next;
    }

}

function traversal(head) {
    let result = [];
    let current = head;
    while(current){
        result.push(current.data);
        current = current.next;
        
    }
    return result.length;


}

const head = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))));
console.log(traversal(head)); 