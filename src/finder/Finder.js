import MenuBar from '../components/MenuBar/MenuBar';
import Desktop from '../components/Desktop/Desktop';
import { ThemeProvider } from 'styled-components'
import { Component } from 'preact';
import base from '../themes/base'

import Alert from '../applications/Alert/Alert';

import testmenu from '../data/test/testmenu'
import testrocket from '../data/test/testrocket'

class Finder extends Component {
    constructor() {
        super();
        this.state = {
            applications: []
        }
    }

    closeApp = () => { this.setState({ applications: this.state.applications.pop("window") }); }

    openApp = (appName, fileName, options) => {
        console.log("opening app with appname: ", appName, ", filename: ", fileName  ,"and options: ", options)

        let name = appName ? appName : 'alert'
        this.setState({ applications: [...this.state.applications, name] });
    }

    render() {
        let { applications } = this.state
        return(
            <ThemeProvider theme={ base }>
            <main>
                <MenuBar melloMenu={ testrocket } appMenu={ testmenu } action={ this.openApp } />
                <Desktop action={ this.openApp } />
                { applications.map(application => <Alert close={ this.closeApp } name={ application } />) }
            </main>
            </ThemeProvider>
        );
    }
}

export default Finder;