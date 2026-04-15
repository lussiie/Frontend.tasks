function trace(fn) {
    const history = [];
    function wrapper(...args) {
        const validArgs = args.slice(0, fn.length);

        const result = fn(...validArgs);

        history.push({
            inp: validArgs,
            out: result
        });

        return result;
    }

    wrapper.history = history;

    return wrapper;
}

const sum = (a, b) => a + b;

const fn = trace(sum);

fn(2, 4);        
fn(3, 6, 8);
fn(1)  //ktpi Nan vorovhetev spasum e 2 argument menq talis enq 1 + undefined = NaN

console.log(fn.history);