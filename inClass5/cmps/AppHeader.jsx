import { eventBusService } from "../services/eventBusService.js";

const { NavLink, withRouter } = ReactRouterDOM;



class _AppHeader extends React.Component {

    state = {
        msg : ''
    }

    componentDidMount() {
        this.unsubscribe = eventBusService.on('showMsg', (msg) => {
            this.setState({ msg });
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    goToAbout = () => {
        this.props.history.push('/about');
    }        

    render() {
        const {msg} = this.state; 
        return <header className="app-header">
            <nav>
                <ul>
                    <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
                    <li><NavLink to="/pet">Pet App</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/survey">Take a Survey</NavLink></li>
                </ul>
                <div className="center">
                    <h1>My App</h1>
                    <a className="small" onClick={this.goToAbout}>
                        Meet the team
                    </a>
                </div>
            </nav>
            {msg && <div className="user-msg">
                {msg}
            </div>}
        </header>
    }
}
// function _AppHeader(props) {

//     function goToAbout() {
//         props.history.push('/about');
//     }

//     return <header className="app-header">
//         <nav>
//             <ul>
//                 <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
//                 <li><NavLink to="/pet">Pet App</NavLink></li>
//                 <li><NavLink to="/about">About</NavLink></li>
//             </ul>
//             <div className="center">
//                 <h1>My App</h1>
//                 <a className="small" onClick={goToAbout}>Meet the team</a>
//             </div>
//         </nav>
//     </header>
// }


// export const AppHeader = _AppHeader;

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);