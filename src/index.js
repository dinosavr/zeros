module.exports = function zeros(expression) {
  // your solution
  
  const splitSymbol = '*';
  const oneExclamationPoint = '!';
  const twoExclamationPoint = '!!';

  let countOfZero;
  let request = expression;
  let factorial;
  let factorialExpressions = [];
  let detectTwoExclamationPoint;
  let strSimpleNum = '';
  let multiplicationsArray = [];

  let debug = false;

  factorialExpressions = request.split(splitSymbol);
  if(debug) console.log(factorialExpressions);

  for (let factorialExpression of factorialExpressions) {
    detectTwoExclamationPoint = factorialExpression.includes(twoExclamationPoint);
    if(debug) console.log("detectTwoExclamationPoint: " + detectTwoExclamationPoint);

    factorialExpression = parseInt(factorialExpression.replace(oneExclamationPoint,''));
    strSimpleNum = strSimpleNum + getSimpleNumbers(factorialExpression, detectTwoExclamationPoint); 
    if(debug) console.log("factorialExpression: " + factorialExpression + "; SumstrSimpleNum: " + strSimpleNum);   
  }

  // console.log(strSimpleNum);
  countOfZero = getCountTen(strSimpleNum);
  console.log("countOfZero: " + countOfZero);

  return countOfZero;
}

function getSimpleNumbers(factorialExpression, detectTwoExclamationPoint){
  const two = 2, five = 5, ten = 10;
  let detectSimpleNumber = true;
  let tempFactorialExpression = factorialExpression;
  let getSimpleNumbers = '';
  let startFactorial;
  let stepFactorial;

  let debug = false;

  // console.log(factorialExpression);

  if(detectTwoExclamationPoint) { 
        if (factorialExpression % 2 == 0) startFactorial = 2;
         else startFactorial = 1;
        stepFactorial = 2;
        }
     else {startFactorial = 1; stepFactorial = 1;}

     if(debug) console.log("startFactorial: " + startFactorial + "; stepFactorial: " + stepFactorial + "; factorialExpression: " + factorialExpression);

 for (let i = startFactorial; i <= factorialExpression; i = i + stepFactorial) { 
     
  if(debug) console.log("i start for =" + i + "; getSimpleNumbers = " + getSimpleNumbers);
  tempFactorialExpression = i;
  detectSimpleNumber = true;

  while (detectSimpleNumber) { 
    detectSimpleNumber = false;
    
      if(tempFactorialExpression % two == 0) {
        tempFactorialExpression = tempFactorialExpression/two; 
        getSimpleNumbers = getSimpleNumbers + " " + two;
        detectSimpleNumber = true;
      }
      if(tempFactorialExpression % five == 0) {
        tempFactorialExpression = tempFactorialExpression/five; 
        getSimpleNumbers = getSimpleNumbers + " " + five;
        detectSimpleNumber = true;
      
      }
      if(tempFactorialExpression % ten == 0) {
        tempFactorialExpression = tempFactorialExpression/ten; 
        getSimpleNumbers = getSimpleNumbers + " " + ten;
        detectSimpleNumber = true;}

        if(debug) console.log("i end while =" + i + "; getSimpleNumbers = " + getSimpleNumbers);
    }
        

  }

  if(debug) console.log("!!! Full getSimpleNumbers: " + getSimpleNumbers);
  return getSimpleNumbers;
}

function getCountTen(strSimpleNum){
  const two = 2, five = 5, ten = 10;
  let countTwo = 0;
  let countFive = 0;
  let countTen;

  let debug = false;

  if(debug) console.log(strSimpleNum);
  simpleNumbers = strSimpleNum.trim().split(' ');
  if(debug) console.log(simpleNumbers);
  for (let simpleNumber of simpleNumbers) {
    if(debug) console.log(parseInt(simpleNumber));
    if(parseInt(simpleNumber) == two) countTwo++;
    if(parseInt(simpleNumber) == five) countFive++;    
    if(parseInt(simpleNumber) == ten) {countTwo++; countFive++;}
  }

  if(debug) console.log("countTwo: " + countTwo);
  if(debug) console.log("countFive " + countFive);

  if(countFive > countTwo ) countTen = countTwo;
   else countTen = countFive;

  return countTen;
}