import { useState } from "react";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import style from "./Credentials.module.css";

function Credentials() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await setPersistence(auth, browserSessionPersistence);
            await signInWithEmailAndPassword(auth, email, password);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className={style.mainBox}>
            <div className={style.wrapper}>
                <div className={style.username}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={style.password}>
                    <label>Password</label>

                    <div className={style.passwordWrapper}>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <span
                            className={style.eye}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                {error && <p className={style.error}>{error}</p>}

                <div className={style.btn}>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Credentials;
