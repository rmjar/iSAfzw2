// given
const files = [
    'index.js',
    'component.jsx',
    'src/test.js',
    'wrong.jsxyz'
];
// FIXME: napisać regexa
const regex = /\.jsx?$/;

// when
const results = files.map(filename => {
    const result = filename.match(regex);
    return result ? result.pop() : null;
});

// then
if (results[1] !== '.jsx' || results[0] !== results[2] || results[3] !== null) {
    throw Error('Popraw regexa!');
}
console.info('Super!')
