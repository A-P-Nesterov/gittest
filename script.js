function digitize(n) {
    let f = String(n).split('').map(i => Number(i)).reverse()
    console.log(f);
}

digitize(345678923456789)
const name = 'Кекс';

function sayMyName () {
    const otherName = 'Борис';
  console.log(otherName); // Выведет "Кекс".


}

sayMyName();

console.log(name); // Получим ReferenceError.