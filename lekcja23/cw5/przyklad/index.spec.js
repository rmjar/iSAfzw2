// given
const files = [
    'index.js',
    'component.jsx',
    'src/test.js',
    'wrong.jsxyz'
];
// FIXME: napisać regexa
const regex = /./;

// when
const results = files.flatMap(filename => filename.match(regex))

// then
if (results[1] !== '.jsx' || results[0] !== results[2] || results[3] !== null) {
    throw Error('Popraw regexa!');
}
console.info('Super!')
