import { useContext, useState } from "react";
import { useUserContext } from "../context/userContext";
// import { MyThemeContext } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submitResult, setSubmitResult] = useState("");

    const { currentUser, handleUpdateUser } = useUserContext();
    const { theme, darkMode } = useContext(MyThemeContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult("Password must be at least 5 chars long");
        } else if (userPassword === userEmail) {
            setSubmitResult("NO");
        } else {
            setSubmitResult("Successful login");
            handleUpdateUser({ email: userEmail });
            navigate("/dash");
        }
    };

    if (currentUser.email)
        return (
            <div className="LoginForm componentBox">
                <p>Welcome {currentUser.email}!</p>
                <button onClick={() => handleUpdateUser({})}>Log Out</button>
            </div>
        );
    return (
        <div style={{ background: theme.background, color: theme.foreground }}>
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <label>
                        Email Address:
                        {/* Use a controlled form input - value AND onChange */}
                        <input
                            type="email"
                            value={userEmail}
                            name="userEmail"
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="formRow">
                    <label>
                        Password:
                        <input
                            type="password"
                            value={userPassword}
                            name="userPassword"
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </label>
                </div>

                {
                    // conditional rendering with ternary
                    // comparison (expression)
                    // ? true block
                    // : false block
                }
                {
                    // showButton ? <button disabled={!showButton}>Log In</button> : null
                }
                <button>Log In</button>
                <p>{submitResult}</p>
            </form>
        </div>
    );
}
