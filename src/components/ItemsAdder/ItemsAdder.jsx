import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import style from "./ItemsAdder.module.css";

function ItemsAdder() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <div className={style.downloader}>
                    <h3>Download Data</h3>
                    <button >Download</button>
                </div>

                <div className={style.uploader}>
                    <h3>Upload Data</h3>
                    <input
                        type="file"
                        accept=".xls,.xlsx"
                    />
                    <button >Upload</button>
                </div>
            </div>

            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
}

export default ItemsAdder;
