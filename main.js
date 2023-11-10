// Problem 1

function SumOfMultiples(n){
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
// console.log(SumOfMultiples(1000))

function EvenFibonacciNumbers(){
    let n = 4000000

    let sum = 0;

    let a = 1;
    let b = 1;
    while(a < n){
        if(a % 2 == 0){
            sum += a;
        }

        let temp = a;
        a = a + b;
        b = temp;
    }
    return sum;
}
// console.log(EvenFibonacciNumbers());

function LargestPrimeFactor(){
    let n = 600851475143

    
}