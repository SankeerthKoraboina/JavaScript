const count = (name) => {

    let c = 0;
    for (let i of name) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u')
            c++;
    }

    return c;

}

const ans = count('sankeerth');
console.log(ans);