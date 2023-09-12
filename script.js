function digitize(n) {
    let f = String(n).split('').map(i => Number(i)).reverse()
    console.log(f);
}

digitize(345678923456789)
