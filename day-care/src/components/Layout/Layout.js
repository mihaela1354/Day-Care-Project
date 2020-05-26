import React from 'react';

import Aux from '../../hoc/Auxil'
const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backrop, Кирилица</div>
        <main>
            {props.children}
        </main>
        <div>Footer</div>
    </Aux>
);

export default layout;