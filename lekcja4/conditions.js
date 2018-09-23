const truthy = true;
let a = 1;


if (truthy) {
    console.log("coś tam coś tam");
}

if (a) {
    const a = 4;
    console.log("???? ", 4);
}

a = "12";
if (a === 1) {
    console.log("it's number 1");
} else if (a === '1') {
    console.log("it's \"1\"");
} else {
    console.log("???");
    
}