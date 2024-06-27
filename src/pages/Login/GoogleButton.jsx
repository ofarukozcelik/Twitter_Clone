import { useNavigate } from "react-router-dom"
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";

const GoogleButton = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider).then(() => {
            navigate("/feed");
            toast.success("Hesaba giriş yapıldı.");
        });
    };
    return (
        <button onClick={handleLogin} className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap">
            <img className="h-[20px]" src="google-logo.svg" alt="Google Logo" />
            Google İle Giriş Yap
        </button>
    )
}

export default GoogleButton