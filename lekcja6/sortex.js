const users = [{
    firstName: 'Jan',
    lastName: 'Kowalczyk',
}, {
    firstName: 'Sebastian',
    lastName: 'Nowak'
}, {
    firstName: 'Maria',
    lastName: 'Nowak'
}, {
    firstName: 'Paweł',
    lastName: 'Kowalczyk'
}, {
    firstName: 'Monika',
    lastName: 'Nowak'
}, {
    firstName: 'Cezary',
    lastName: 'Kowal'
}];

users.sort((a, b) => ((a.lastName + a.firstName).localeCompare(b.lastName + b.firstName)));
console.log(users);