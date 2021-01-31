function getcolan() {
    var drinkName = prompt('Write a cola word ?');
    var goodman = prompt('you are a good man ?respone to me with thanks');
    console.log(typeof prompt);
    console.log(drinkName);
    console.log(goodman);
    for (var i = 0; i <= 100; i++) {
      console.log(i);
    }
  }
  
  getcolan();
  // a and b are the input
  // function expression
  var getSum = function (a, b) {
    var c = (a + b)*10;
    // c is the output or return value
    return c;
  };
  
  var sum = getSum(20, 7);
  alert("you ve got 60 cola and discount by")
  alert(sum);
  alert("%")
  var newquste = prompt('tell me thanks again');
  document.write(sum);
  console.log(getSum(15, 5));