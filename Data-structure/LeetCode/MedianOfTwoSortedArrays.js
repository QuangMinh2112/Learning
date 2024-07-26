var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  const n = arr.length;
  if (n % 2 === 0) {
    return (arr[n / 2] + arr[n / 2 - 1]) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
};

const nums1 = [4, 5];
const nums2 = [3, 6];
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);

// Binary Search
// - Với thuật toán O(log(n + m)) thì bạn phải sử dụng Binary Search
// B:[1,2,3,4,5,6,7,8]
// A:[1,2,3,4,5]
// =>>> [1,1,2,2,3,3,4,4,5,5,6,7,8]
// Trong trường hợp này 4 sẽ là Median , và ta có thể thấy bên trái sẽ gồm 6 element và bên phải cũng vậy
// [1,1,2,2,3,3,|4|,4,5,5,6,7,8]
// Và bấy giờ dả sử chúng ta có 12 phần tử
// -> [1,1,2,2,3,3,4,4,5,5,6,7] và bấy giờ bên trái sẽ là sáu phần tử và bên phải cũng vậy
// Và bây h Median sẽ là 3 và 4
// Vậy làm sao có thể mô phỏng 2 giá trị này mà không cần phải hợp nhất hải mảng lại với nhau

// Keep in mind that the total number of elements we have 13
// And hafl the number of elements we have 6
// Trong trường hợp này khi nói về phân vùng, chúng ta muốn phần vùng bên trái của mình bằng với half (left = half = 6)
// Để làm điều đó thì đầu tiên sẽ lấy half của A và khởi tạo con trỏ bên trái, bên phải và middle
// Lúc này con trỏ bên trái sẽ là 1, bên phải sẽ là 5 và middle sẽ là 3 => [1,2,|3|,4,5]
// Và điều đó có nghĩa là vùng bên trái bây giờ sẽ có 3 phần tử  [1,2,|3|,4,5] => [1,2,3]
// Lúc này sẽ lấy half - 3 = 3
// Sẽ chạy binary search lên B và lúc này Left partition is [1,2,3] làm như này thì chúng ta sẽ không cần phải dùng con trỏ như ở A
// Và câu hỏi bây h là:Làm sao biết được là đã tìm được vùng chính xác bên trái ?
// Và chúng ta muốn biết là vùng bên trái nhỏ hơn hoặc bằng bên phải thì làm sao determine that ?
