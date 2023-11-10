function SumOfMultiples(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
// console.log(SumOfMultiples(1000))

function EvenFibonacciNumbers() {
    let n = 4000000

    let sum = 0;

    let a = 1;
    let b = 1;
    while (a < n) {
        if (a % 2 == 0) {
            sum += a;
        }

        let temp = a;
        a = a + b;
        b = temp;
    }
    return sum;
}
// console.log(EvenFibonacciNumbers());

function binomialCoef(n, k) {
    if (k > n) {
        return 0;
    }
    if (k === 0 || k === n) {
        return 1;
    }

    let r = 1;
    for (let d = 1; d <= k; d++) {
        r *= n--;
        r /= d;
    }
    return r;
}
// console.log(binomialCoef(8, 3))

function isPrime(number) {
    if (number == 0 || number == 1) {
        return true;
    }

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(71))

function LargestPrimeFactor() {
    let n = 600851475143

    let primes = [];
    let squaredN = Math.ceil(Math.sqrt(n))

    for (let i = 2; i <= squaredN; i++) {
        // console.log(`n=${n} % i=${i} == ` + n % i)
        if (isPrime(i) && n % i == 0) {
            // n /= i;
            // squaredN = Math.ceil(Math.sqrt(n))
            primes.push(i)
            // console.log(`n=${n} ; squaredN=${squaredN} ; prime=${i}`)
        }
    }

    console.log(primes)
    return Math.max(...primes)
}
// console.log(LargestPrimeFactor())

function isPalindrome(n) {
    n = Array.from(String(n), Number);

    for (let i = 0; i < Math.ceil(n.length / 2); i++) {
        if (n[i] != n[n.length - i - 1]){
            return false;
        }
    }
    return true;
}
// console.log(isPalindrome(9009))

function LargestPalindromeProduct(digits) {
    let left = 1;
    let right = 1;
    for (let i = 1; i < digits; i++) {
        left *= 10;
        right *= 10;
    }

    console.log(`left=${left} ; right=${right}`)

    let max = 0;
    for (let i = right; i < right * 10; i++) {
        for (let j = left; j < left * 10; j++) {
            if (isPalindrome(i * j) && i * j >= max) {
                max = i * j;
            }
        }
    }
    return max;
}
// console.log(LargestPalindromeProduct(4))

function testEvenlyDivisible(n) {
    for(let i = 2; i <= 20; i++){
        if(n % i != 0) {
            return false;
        }
    }
    return true;
}

function SmallestMultiple() {
    for(let i = 1; true; i++) {
        if(testEvenlyDivisible(i)) {
            return i;
        }
    }
    return false;
}
// console.log(SmallestMultiple())

function SumSquareDifference(n) {
    let sumOfSquares = 0;
    let i;
    for(i = 1; i <= n; i++) {
        sumOfSquares += i * i;
    }
    i *= (i-1)/2;
    i=i*i-sumOfSquares
    return i;
}
// console.log(SumSquareDifference(100))

function NstPrime(n){
    
}
console.log(NstPrime(6))