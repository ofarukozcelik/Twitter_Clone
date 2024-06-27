import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";

const Feed = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user_data) => {
            setUser(user_data);
        });
        // Kullanıcı sayfadan ayrıldığında aboneliği sonlandır.
        return () => unsub();
    }, []);

    return (
        <div className="feed h-screen bg-black overflow-hidden text-white">
            <Nav user={user} />
            <Main user={user} />
            <Aside />
        </div>
    )
}

export default Feed