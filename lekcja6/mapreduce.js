const users = [{
    _id: '5bc0ed7ea7667514d6bab9e5',
    name: 'Juanita Christensen',
    email: 'juanitachristensen@gynk.com'
}, {
    _id: '5bc0ed7e6a206238c491a98f',
    name: 'Jenna Hopkins',
    email: 'jennahopkins@gynk.com'
}, {
    _id: '5bc0ed7e6f8e5500fbf557b9',
    name: 'Fanny Goodwin',
    email: 'fannygoodwin@gynk.com'
}, {
    _id: '5bc0ed7ead34d79bbe9fc272',
    name: 'Debbie Woods',
    email: 'debbiewoods@gynk.com'
}, {
    _id: '5bc0ed7e7bb9c994622df2de',
    name: 'Marietta Hendricks',
    email: 'mariettahendricks@gynk.com'
}, {
    _id: '5bc0ed7e78aa3135a4141efb',
    name: 'Valarie Mcmahon',
    email: 'valariemcmahon@gynk.com'
}];


const reducedEmail = users.reduce((aggregator, current, i, arr) => {
    return aggregator + (i === 0 ? "" : ";") + arr[i].email;
}, "");
console.log(reducedEmail);


const mappedEmails = users.map(({email}) => email);
console.log(mappedEmails);
const stringEmail = mappedEmails.join(";");
// latwiej const usersEmails2 = users.map(x => x.email).join(";");
console.log(stringEmail);