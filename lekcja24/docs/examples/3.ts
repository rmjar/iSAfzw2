/// 3. \\\

function convertToNumber(input: string): number {
    return +input;
}

let alias: (arg: string) => number;
alias = convertToNumber;

alert(typeof alias('890'));
alert(typeof convertToNumber('abc'));

async function getStringPromise(): Promise<string> {
    return '';
}