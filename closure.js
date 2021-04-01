function stopWatch(params) {
    let count = 1;
     return function () { 
         count++;
         return count;    
     }

 }
 const clock1 = stopWatch();
 console.log(clock1());