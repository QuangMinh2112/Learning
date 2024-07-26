// -----------------  TYPE ANNOTATION ---------------
// let a: number = 10;
// let b: string = "hello world";
// const total = (n1: number, n2: number): number => {
//   return n1 + n2;
// };
// const result = total(10, 20);
var User = {
    name: "Quang Minh",
    email: "quangminh@gmail.com",
    greet: function (message) {
        console.log(message);
    },
};
var numList = [1, 2, 3, 4];
var worldList = ["quang minnh"];
var listStudent = [{ id: 1, name: "quang minh" }];
var convetToArray = function (input) {
    return [input];
};
console.log(convetToArray(3));
