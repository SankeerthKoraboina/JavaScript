function big(x, small) {
    console.log('Hi');
    console.log(x)
    small(msg);
}

msg = 'Hi';

function small(msg) {
    console.log("Hi I am Small");

}

big(2, small);