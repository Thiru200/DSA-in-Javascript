function instersectPoint(head1,head2)
{
    let mySet = new Set();
    let curr = head1;
    while (curr != null) {
        mySet.add(curr);
        curr = curr.next;
    }
    curr = head2;
    while (curr != null) {
        if (mySet.has(curr)) {
            return curr.data;
        }
        curr = curr.next;
    }
    return -1;
}

let linkL1 = new Node(63);
let linkL12 = new Node(96);
let linkL13 = new Node(55);
let linkL14 = new Node(98);
let linkL15 = new Node(30);
let linkL16 = new Node(94);
let linkL17 = new Node(19);
let linkL18 = new Node(48);
linkL1.next = linkL12;
linkL12.next = linkL13;
linkL13.next = linkL14;
linkL14.next = linkL15;
linkL15.next = linkL16;
linkL16.next = linkL17;
linkL17.next = linkL18;
linkL18.next = null;

let linkL2 = new Node(65);
let linkL22 = new Node(61);
let linkL23 = new Node(78);
let linkL24 = new Node(51);
let linkL25 = new Node(48);
let linkL26 = new Node(11);

let linkL27 = new Node(98);
let linkL28 = new Node(30);
let linkL29 = new Node(94);
let linkL30 = new Node(19);
let linkL31 = new Node(48);

linkL2.next = linkL22;
linkL22.next = linkL23;
linkL23.next = linkL24;
linkL24.next = linkL25;
linkL25.next = linkL26;
linkL26.next = linkL27;
linkL27.next = linkL28;
linkL28.next = linkL29;
linkL29.next = linkL30;
linkL30.next = linkL31;
linkL31.next = null;


console.log(instersectPoint(linkL1,linkL12));


