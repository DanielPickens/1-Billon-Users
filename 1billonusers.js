function getBillionUsersDay(growthRates) {

 // Write your code here
 let n = growthRates.length;
    let userCount = 0;                           //User Count on Day - day
    let day = 1;
    while(userCount < 1e9)
    { 
      userCount = 0;                                   //Reset Count and check for next day
      for(let i=1;i<=n;i++){
        userCount +=  Math.pow(growthRates[i-1],day);
      }
      day++;
    }
      
    return day-1;
  }
