class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

const initializeLinkedListFromArray = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = current.next;
  }

  return head;
};

const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

const head = initializeLinkedListFromArray([
  'I',
  'am',
  'Labheshwar',
  'in',
  'a',
  'LinkedList',
]);

printLinkedList(head);
