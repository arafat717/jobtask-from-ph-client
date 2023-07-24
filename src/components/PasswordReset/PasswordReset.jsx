/* eslint-disable no-undef */
import { useState } from "react";


const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [resetError, setResetError] = useState(null);
  
    const handleResetPassword = () => {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setResetSuccess(true);
        })
        .catch((error) => {
          setResetError(error.message);
        });
    };
    return (
        <div>
            {resetSuccess ? (
                <p>Password reset email sent successfully.</p>
            ) : (
                <>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    <button onClick={handleResetPassword}>Reset Password</button>
                    {resetError && <p>{resetError}</p>}
                </>
            )}
        </div>
    );
};

export default PasswordReset;