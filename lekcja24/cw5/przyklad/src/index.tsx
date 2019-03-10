import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FullName } from './component';

const [n, s] = ['Mateusz', 'Chrzonsti'];
ReactDOM.render(
    <FullName name={n} surname={s} />,
    document.getElementById('app')
);