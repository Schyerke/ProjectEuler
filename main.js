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
        return false;
    }

    for (let i = 2; i < number; i++) {
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
        if (n[i] != n[n.length - i - 1]) {
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
    for (let i = 2; i <= 20; i++) {
        if (n % i != 0) {
            return false;
        }
    }
    return true;
}

function SmallestMultiple() {
    for (let i = 1; true; i++) {
        if (testEvenlyDivisible(i)) {
            return i;
        }
    }
    return false;
}
// console.log(SmallestMultiple())

function SumSquareDifference(n) {
    let sumOfSquares = 0;
    let i;
    for (i = 1; i <= n; i++) {
        sumOfSquares += i * i;
    }
    i *= (i - 1) / 2;
    i = i * i - sumOfSquares
    return i;
}
// console.log(SumSquareDifference(100))

// n should be 10 001
function NstPrime(n) {
    let prime = 1;
    let counter = 0;

    while (counter < n) {
        prime++;
        if (isPrime(prime)) {
            counter++;
        }

    }

    return prime;
}
// console.log(NstPrime(10001))

function LargestProductInASeries(n) {
    let numbers = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

    let max = 0;
    for (let i = 0; i < numbers.length - n; i++) {
        let prod = 1;
        for (let j = i; j < i + n; j++) {
            prod *= Number(numbers.charAt(j));
        }
        if (prod > max) {
            max = prod;
        }
    }
    return max;

}
// console.log(LargestProductInASeries(13));

function SpecialPythagoreanTriplet() {
    for (let a = 2; a < 1000; a++) {
        for (let b = 2; b < 1000; b++) {
            for (let c = 2; c < 1000; c++) {
                if (a + b + c == 1000 && (a*a + b*b == c*c)  ) {
                    console.log(`${a}*${b}*${c}`)
                    return a * b * c;
                }
            }
        }
    }
    return null;
}
//console.log(SpecialPythagoreanTriplet())

function SummationOfPrimes(n){
    let sum = 0;
    let list = [];
    for(let i = 1; i<n;i++){
        list.push(i);
    }

    for(let )

    return sum;
}
console.log(SummationOfPrimes(2000000));