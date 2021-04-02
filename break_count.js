const num = [1,2,3,4,5,6,-1,-3,-5];

for (let i = 0; i < num.length; i++) {
    // console.log( num[i]);

    if (num[i]>3){
        break;
    }
    //console.log(num[i]);
}

for (let i = 0; i < num.length; i++) {
    // console.log( num[i]);

    if (num[i]<0){
        continue;
    }
    console.log(num[i]);
}