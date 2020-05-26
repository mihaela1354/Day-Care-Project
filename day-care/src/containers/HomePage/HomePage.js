import React, { Component } from "react";
import Aux from '../../hoc/Auxil';
import Info from '../../components/Home/Info/Info';

class HomePage extends Component {
    render() {
        return (
            <Aux>
                <div>Picture Container</div>
                <Info></Info>

                <div>News Container</div>
            </Aux>
        );
    }
}

export default HomePage;