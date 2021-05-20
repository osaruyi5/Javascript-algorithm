1

function convertFahrToCelsius(num) {
  let fahr = num - 32;
  let output = fahr * 5 / 9;

  let input = JSON.stringify(num);

  if (Array.isArray(num)) {
    console.log(input + " is not a valid number but an array ");
  } else if (typeof num !== 'number') {
    console.log(input + " is not a valid number but a/an " + typeof num);
  }

  console.log(output.toFixed(4));
}

convertFahrToCelsius(0);


2

function checkYuGiOh(n) {
  //create an array with n length
  //use try/catch to validate n
  try {
    let arr = [...new Array(Number(n))].map((_value, index) => {
     
     //increasing index which start from 0 to start from 1
      index++;
      
      //create constant for all the strings to replace
      const [_2, _3, _5] = ["yu", "gi", "oh"];
     
      //checking all
      if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
        return _2 + "-" + _3 + "-" + _5;

      //check for two multiples
      else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
      else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
      else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;
      
       //check for one multiple
      else if (index % 2 === 0) return _2;
      else if (index % 3 === 0) return _3;
      else if (index % 5 === 0) return _5;
      //return the number
      return index;
    });
    return arr;
  } catch (err) {
    return `invalid parameter: "${n}"`;
  }
}
console.log(checkYuGiOh())
    