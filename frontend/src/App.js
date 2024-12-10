import React from 'react';
import { GoogleLogin } from 'react-google-login';

const App = () => {
    const handleSuccess = (response) => {
        console.log('Login Success:', response.profileObj);
        // Send token to the backend for validation and session creation
    };

    const handleFailure = (response) => {
        console.log('Login Failed:', response);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Google OAuth Integration</h1>
            <GoogleLogin
                clientId="your-google-client-id"
                buttonText="Login with Google"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default App;
