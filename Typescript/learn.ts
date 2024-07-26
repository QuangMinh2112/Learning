// -----------------  TYPE ANNOTATION ---------------
// let a: number = 10;
// let b: string = "hello world";
// const total = (n1: number, n2: number): number => {
//   return n1 + n2;
// };
// const result = total(10, 20);

// ----------------- INTERFACE AND TYPE --------------
interface UserInterface {
  name: string;
  email: string;
  age?: number; // optional property,
  greet(message: string): void;
}

const User: UserInterface = {
  name: "Quang Minh",
  email: "quangminh@gmail.com",
  greet(message: string) {
    console.log(message);
  },
};

// ----------------- UNION AND INTERSECTION TYPE --------------
// (intersection type) được ký hiệu bằng dấu &.
// Intersection type cho phép bạn kết hợp nhiều kiểu lại với nhau,
// tạo ra một kiểu mới mà bao gồm tất cả các thuộc tính của các kiểu được kết hợp.

// Ví dụ, nếu bạn có hai interface Person và Employee,
// bạn có thể tạo một intersection type để tạo ra một kiểu mới có tất cả các thuộc tính của cả hai interface này:

type IDFIELDTYPE = string | number; // union type

// ------------------- GENERIC TYPES ADVANCE ----------------
interface List<T> {
  length: number;
  [index: number]: T;
}
interface Student {
  id: number;
  name: string;
}

const numList: List<number> = [1, 2, 3, 4];
const worldList: List<string> = ["quang minnh"];
const listStudent: List<Student> = [{ id: 1, name: "quang minh" }];

const convetToArray = <T>(input: T): T[] => {
  return [input];
};
console.log(convetToArray(3));

const addEmployee = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const result = addEmployee({ name: "Minh", age: 22 });

// truong hop bat buoc phai co property, vi du o day la name
const addNewEmployeeWithConstants = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const result2 = addNewEmployeeWithConstants({ name: "Quang Minh", age: 12 });
// ------------------ Omit ------------------------
// giúp chúng ta loại bỏ một số thuộc tính được chỉ định không cần thiết

// Sự giống nhau giữa TYPE và INTERFACE
// 1.Cú pháp Interface lúc khai báo thì ko có dấu '=' còn type thì có
// Dù 2 cả đều có khả năng mở rộng, nhưng đối với interface thì phải sử dụng extend còn type thì chỉ cần dùng dấu "&"
// Trong trường hợp Interface và type được mở rộng với nhau thì thằng nào được mở rộng thì phải theo cú pháp của thằng đấy
type a = { x: number };
interface b extends a {
  y: number;
}

// 2. Interface chỉ có thể đinh kiểu được Object hoặc Function còn với Type thì nó đa năng hơn rất nhiều (Primitive, Union, Object, Function, Tuple,Mapped Types)
// 3. Interface có thể khai báo nhiều lần và chúng tự merge lại với nhau, với Type thì ko (chúng sẽ báo Duplicate)
// 4. Cả 2 có thể implements được, nhưng đối với Type là Union thì không thể implement được
interface Point1 {
  x: number;
  y: number;
}
type Point2 = {
  x: string;
  y: string;
};

class SomePoint implements Point1 {
  x = 3;
  y = 4;
}
class SomePoint2 implements Point2 {
  x = "Quang";
  y = "Minh";
}

type unionType = { x: number } | { y: number }; // ko thể implement được
