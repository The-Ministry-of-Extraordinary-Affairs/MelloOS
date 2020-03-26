import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

/* The Finder */

class Finder extends Component {
    constructor(props){
        super();
        this.state = {
            theme: props.theme,
            finderMenu: props.finderMenu,
            tempOSMenu: props.tempOSMenu,
            installedApplications: props.installedApplications
        }
    }

    render(){
        const {
            theme
        } = this.state;
        return(
            <ThemeProvider theme={theme}>
                <main>
                    We're back!
                </main>
            </ThemeProvider>
        )
    }
}

export default Finder