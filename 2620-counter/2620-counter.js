const createCounter = (n) => {
    return () => {
        return n++;
    };
};


const counter = createCounter(9);
counter();
counter();
counter();
