function fiftyThirtyTwenty(income) {
  const needsValue = parseInt((income * 50) / 100);
  const wantsValue = parseInt((income * 30) / 100);
  const savingsValue = parseInt((income * 20) / 100);

  const resultObj = {
    Needs: needsValue,
    Wants: wantsValue,
    Savings: savingsValue,
  };

  return resultObj;
}

console.log(fiftyThirtyTwenty(10000)); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":2000 }
console.log(fiftyThirtyTwenty(50000)); // ➞ { "Needs": 25000, "Wants": 15000,"Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":2690 }
