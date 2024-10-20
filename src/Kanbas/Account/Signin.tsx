import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="container">
            <h1>Sign in</h1>
            <input id="wd-username" placeholder="username"
                className="form-control mb-2 w-100"/>
            <input id="wd-password" placeholder="password" 
                type="password" className="form-control mb-2 w-100"/>
            <Link id="wd-signin-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100 mb-2">
                Sign in 
            </Link>
            <Link id="wd-signup-link" 
                to="/Kanbas/Account/Signup" 
                className="d-block w-100 mt-2">
                Sign up
            </Link>
        </div>
    );
}
