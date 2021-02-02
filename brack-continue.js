const num = [1,2,3,4,5,6,7,8,9];
//break
for(let i = 0; i<num.length; i++){
    console.log(num[i]);
    if(num[i]>3){
        break;
    }
}
//continue - value don,s show.
const num1 = [1,2,-3,4,-5,6,-7,8,9];
for(let i = 0; i<num1.length; i++){
    //console.log("continue top", num1[i]);
    if(num1[i]<0){
        continue;
    }
    console.log(num1[i]);
}