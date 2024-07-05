function solution(n) {
    if (n === 1 || n === 2) return 1;

    let prev = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = (prev + current) % 1234567;
        prev = current;
        current = next;
    }

    return current;
}


////////////////////////////////////////

function trampoline(fn) {
    return function (...args) {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    };
}

const fibonacci = trampoline(function fib(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return () => fib(n - 1, b, (a + b) % 1234567);
});

function solution(n) {
    return fibonacci(n);
}