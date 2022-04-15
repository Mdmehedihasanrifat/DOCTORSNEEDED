import React, {useContext} from 'react';
import './account.css'
import {Link} from "react-router-dom";
// import {useAuth} from "../../Context/AuthContext";
import {UserContext} from "../../../App";

const Account = () => {

    // const {user,LogOut}=useAuth();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="account">
            {loggedInUser ? (
                <>
          <span className="material-icons-outlined color" title="Account">
            account_circle
          </span>
                    <span className="color">{loggedInUser.displayName}</span>
                    <span
                        className="material-icons-outlined color"
                        title="Logout" onClick={setLoggedInUser(" ")}
                    >
            {" "}
                        logout{" "}
          </span>
                </>
            ) : (
                <>
                    <Link to="/signup" className="button">Signup</Link>
                    <Link to="/login" className="buttonLog">Login</Link>
                </>)
            }
        </div>
    );
};

export default Account;