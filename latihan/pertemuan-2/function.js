
// Function
const year = 2022;
const bod = 2003;
const age = year - bod;
console.log(`Umur: ${age}`);

// function-declatraion
function getAge(bod) {
    const year = 2022;
    const age = year - bod;
    return age;
}

console.log(getAge(1998));
console.log(getAge(2002));

// Arrow Function
const getAge1 = (bod) => {
    const year = 2022;
    const age = year - bod;
    return age;
}
console.log(getAge1(1997));

// Arrow Function
const getAge2 = (bod) => 2022 - bod;
console.log(getAge2(1997));

// Default param Function
const getAge3 = (bod = 1998) => {
    const year = 2022;
    const age = year - bod;
    return age;
}

console.log(getAge3());
