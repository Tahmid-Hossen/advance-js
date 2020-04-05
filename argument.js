function add(num1, num2){
    console.log([...arguments]);
  return num1+num2+arguments[2];
}
const result = add(10, 20, 30);
console.log(result);

// it's not an array but you can access it by index.