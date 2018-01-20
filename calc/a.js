var arr=[];
arr.push(1);
arr.push('+');
arr.push(2);
arr.push('*');
arr.push(3);
arr.push('*');
arr.push(3);
console.log(arr);
let re = fnCalc(1, 2, '+');
console.log(re);

function fnCalc(l, r, op){
  let re = 0;
  switch (op) {
    case '+':
      re = l + r;
      break;
    case '-':
      re = l - r;
      break;
    case '*':
      re = l * r;
      break;
    case '/':
      re = l / r;
      break;
    default:
      break;
  }
  return re;
}

const readline = require('readline');


function ff(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('input number ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
  });

}

while (1) {
  ff();  
}

