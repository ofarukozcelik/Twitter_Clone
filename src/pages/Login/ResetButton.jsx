import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify"
import { auth } from "../../firebase";



const ResetButton = ({ email }) => {
    // Şifre sıfırlama maili gönder.
    const handleReset = () => {
        sendPasswordResetEmail(auth, email).then(() =>
            toast.info("Şifre sıfırlama maili gönderildi."))
            .catch((err) => toast.error("Bir hata oluştu" + err.code));

    };

    return (
        <button onClick={handleReset} className="text-red-500">
            Şifrenizi mi unuttunuz ?
        </button>
    )
}

export default ResetButton