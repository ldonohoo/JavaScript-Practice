let hello = "   Hello, World!  ";
let wsRegex = /(^\s*)(.+)(\s*$)/;

let result = hello.replace(wsRegex, '$2');
console.log(result);
