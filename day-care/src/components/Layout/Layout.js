import React from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxil'
const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backrop, Кирилица</div>
        <main className={classes.Content}>
            {props.children}
        </main>
        <div>Footer</div>
    </Aux>
);

export default layout;