import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

import base from '../settings/themes/base';

class Finder extends Component {
    constructor(){
        super();
        this.state = {
            applications: []
        }
    };

    render(){
        return(
            <ThemeProvider theme={base}>
                <main>
                    We're back.
                </main>
            </ThemeProvider>
        )
    }
}

export default Finder