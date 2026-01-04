import { useEffect, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Credentials from "../Credentials/Credentials";
import Copyright from "../Copyright/Copyright";
import style from "./Admin.module.css";
import ExcelLikeTable from "../ExcelLikeTable/ExcelLikeTable";

function Admin() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return null;

    return (
        <div className={style.main}>
            <div className={style.adminContainer}>
                <Header />
                {!isAuthenticated ? <Credentials /> : <ExcelLikeTable />}
            </div>
            {
                isAuthenticated && (
                    <div className={style.signoutbtn}>
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                )
            }
            <Copyright />
        </div>
    );
}

export default Admin;
