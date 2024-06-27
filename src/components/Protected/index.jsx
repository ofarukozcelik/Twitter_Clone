import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const Protected = () => {
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        // Kullanıcının oturumunu izler
        onAuthStateChanged(auth, (user) => {
            setIsAuth(user ? true : false);
        });
    }, []);

    // Eğer kullanıcının yetkisi yoksa logine yönlendir
    if (isAuth === false) {
        return <Navigate to="/" replace />;
    }

    // Eğer kullanıcının yetkisi varsa alt route elemnti göster.
    return <Outlet />;
};

export default Protected;