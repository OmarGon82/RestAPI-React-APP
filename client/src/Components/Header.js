import React from 'react'; 
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
        return (
            <div className="header">
                <div className="bounds">
                    <h1 class="header---logo">Full Stack App</h1>
                    <nav>
                    <React.Fragment>
                        <span>Welcome, UserName!</span>
                        <Link to="/signout">Sign Out</Link>
                    </React.Fragment>
                    <React.Fragment>
                        <Link className="signup" to="/signup">Sign up</Link>
                        <Link className="signin" to="/signin">Sign In</Link>
                    </React.Fragment>
                    </nav>
                </div>
            </div>
        );
    }
}