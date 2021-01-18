import { AppHeader } from './cmps/AppHeader.jsx';
import { Mail } from './apps/Mail/MailApp.jsx';
import { KeepApp } from './apps/Keep/KeepApp.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class RootCmp extends React.Component {

    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/mail" component={Mail} />
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/" component={Home} />
                    </Switch>
                    <footer className="animate__animated animate__jello">All rights reserved to Inbal Azmon & Adi Magori LTD.</footer>
                </section>
            </Router>
        );
    }
}
