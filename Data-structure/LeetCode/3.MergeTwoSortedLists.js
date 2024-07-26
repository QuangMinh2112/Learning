class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

var mergeTwoSortedLists = (list1, list2) => {
  const dummy = new ListNode(0, null);

  let head = dummy;

  while (list1 && list2) {
    console.log({ head, list1Value: list1.data, list2Value: list2.data });
    if (list1.data < list2.data) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }
  if (list1) {
    head.next = list1;
  }
  if (list2) {
    head.next = list2;
  }

  return dummy.next;
};
const l1 = [1, 2, 4];
const l2 = [1, 3, 4];
console.log(mergeTwoSortedLists(l1, l2));
