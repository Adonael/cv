function fibonacciGenerator (n) {
var fibNumbers=[];
for(var i=0; i<n;i++){
    var number;
    if(i===0 || i===1){
        fibbNumbers.push(i);
    }else{
        fibNumbers.push(number=fibNumbers[i-1]+fibNumbers[i-2]);
    }
}
    console.log(fibbNumbers);
}
fibonacciGenerator(10);
