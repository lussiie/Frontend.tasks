function memoizedIsPrime() {
    const cache = {};

    return function(n) {
        if (n in cache) {
            console.log("From cache");
            return cache[n];
        }

        console.log("Calculated");
        let result = true;

        if (n <= 1) result = false;
        else {
            for (let i = 2; i * i <= n; i++) {
                if (n % i === 0) {
                    result = false;
                    break;
                }
            }
        }

        cache[n] = result;
        return result;
    };
}
const isPrimeFast = memoizedIsPrime();

console.log(isPrimeFast(7));  
console.log(isPrimeFast(7));  
console.log(isPrimeFast(1)); 
console.log(isPrimeFast(9)); 