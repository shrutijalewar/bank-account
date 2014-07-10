var prompt = require('sync-prompt').prompt;
var balance = 1000
balance = parseInt(balance);
var deposit = [];
var withdraw = [];


var ques = prompt('Would you like to (d)eposit, (w)ithdraw or (q)uit? ');
  while(ques != 'q'){
      var amt = prompt('Please enter an amount. ');
      amt = parseFloat(amt);
      if(ques ==='d') {deposit.push(amt)}else{withdraw.push(amt) };
     ques= prompt("Would you like to (d)eposit, (w)ithdraw or (q)uit? ");
         }
//dont parseint an array.


var dsum = 0;
var wsum = 0;

//mid point check to check the code, not necessary in the final code.
//console.log(deposit);
//console.log(withdraw);

for(var d = 0; d < deposit.length; d++) {dsum += deposit[d]};

for(var w = 0; w < withdraw.length; w++) {wsum += withdraw[w]};

balance = 1000 + dsum - wsum;

if(balance < 0) {balance = balance - 50}
console.log ("Your current balance is $ " +  balance);









