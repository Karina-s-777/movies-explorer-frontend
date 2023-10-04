export const calcMoviesCounter = () => {
    const counter = {first: 12, more: 3};

    if (window.innerWidth < 1040 ) {
        counter.first = 8;
        counter.more = 2;
    }  

    if (window.innerWidth < 481 ) {
        counter.first = 5;
        counter.more = 2;
    }  

    return counter;
}