function checkCashRegister(price, cash, cid) {
  // cid = cash in drawer
  // cid is a 2D array listing available curency.
  // object with a status key and change key를 return.
  const rule = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME' : 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE' : 5,
    'TEN' : 10,
    'TWENTY' : 20,
    'ONE HUNDRED' : 100
  }
  const status = ['OPNE','CLOSED','INSUFFICIENT_FUNDS'];
  let moneyToChange = cash-price;
  let output = [];

  if (moneyToChange < 0){
    return [status[2], 'change: []'];
  } 

  let i = 0;
  while (moneyToChange > 0){
    const subtract = rule[i];
    if (subtract > moneyToChange){
      i++;
    } else {
      moneyToChange -= subtract;
      subtract -= rule[i]
      cid[rule[i]]-rule[i] //대충이정도? 아 근데 너무 어렵다
    }
  }

  // 내 계획:
  // cash - price = moneyToChange;
  // moneyToChange < 0 ? status[2] : keep going:
  // 만약 5달러가 남았다면 (moneyToChange = 5)
  // rule[i] 한바퀴 돌려서 moneyToChange < rule[i]? i++
  // 아니면( moneyToChange >= rule[i]) 거스름돈이 크거나 같으면
  // moneyToChange -= rule[i] 로 update
  // 계속 반복
  // 다른 변수에다가 rule[i]넣을까? 그래서 cid에도 반영하게?
  // 그래서 이게 cid에도 반영이 되어야함
  // 암튼 조져따 마지막에 어케 할 수있을지 머리가 안돌아간다!

  return output;
}


console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]]));



// <freeCodeCamp Solution>
// Create an array of objects which hold the denominations액면금액 and their values
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] }; // 매우 중요하네..
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1]; 
      // acc에 totla이라는 key를 만들고 curr[1]은 value을 추가. curr[0]은 key.
      acc[curr[0]] = curr[1]; // acc[key] = curr[value]이란건데 뭔말인지;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  
  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}
