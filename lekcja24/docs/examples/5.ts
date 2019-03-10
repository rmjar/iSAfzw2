/// 5. \\\

function introduce(obj: { name: string }) {
    alert(obj.name);
}

export interface Named {
    name: string;
    surname?: string;
}

const person: Named = { name: 'Brad', surname: 123 };
introduce(person);
