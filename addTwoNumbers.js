var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let head = new ListNode(0);
    let p = head;
    while (l1 || l2) {
        let sum = carry;
        if (l1) {
        sum += l1.val;
        l1 = l1.next;
        }
        if (l2) {
        sum += l2.val;
        l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        p.next = new ListNode(sum % 10);
        p = p.next;
    }
    if (carry) {
        p.next = new ListNode(carry);
    }
    return head.next;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([0],[0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));