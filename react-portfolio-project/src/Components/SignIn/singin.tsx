import './signin.css';
import topImage from "../../images/egis-logo.png";
import { Link, Outlet } from 'react-router-dom';

const SignIn: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image">
                        <img src={ topImage } alt="Error loading" />
                        {/* <div className="text">
					        <p>Join the community of developers <i>- MJP</i></p>
				        </div> */}
                    </div>
			    <div className="col-md-6 right">
                    <div className="input-box">
                        <header>Vite + React + Typescript</header>
                        <div className="input-field">
                            <input type="text" className="input" required />
                            <label>Username</label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input" required />
                            <label>Password</label>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="submit" value="Sign In" />
                        </div>
                        <div className="signin">
                            <span>Don't have an account? <a>Click here</a></span>
                        </div>

                    </div>
			    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn