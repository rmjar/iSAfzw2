const truthy = true;
let a = NaN;


if (truthy) {
    console.log("coś tam coś tam");
}

if (a) {
    const a = 4;
    console.log("???? ", 4);
}

a = "1";
console.log("If-else:")
if (a === 1) {
    console.log("it's number 1");
} else if (a === '1') {
    console.log("it's \"1\"");
} else {
    console.log("???");

}

console.log("Switch:")

switch (a) {

    case "1":
        console.log("it's \"1\"");
        break;
    case 1:
        console.log("it's number 1");
        break;
    default:
        console.log("???");
}

console.log("Ternary:");
console.log(a ? "Hello" : "Bye");