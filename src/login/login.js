import React, { useEffect } from 'react';
import { useNavigate } from "react-router";

const Login = ({ onData }) => {
    let navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        const code = new URLSearchParams(window.location.search).get('code');
        if (code && localStorage.getItem("accessToken") === null) {
            async function getAccessToken() {
                await fetch(`${process.env.REACT_APP_API_URL}/getAccessToken?code=${code}`, {
                    method: "GET"
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    if (data.accessToken) {
                        localStorage.setItem("accessToken", data.accessToken);
                        onData(true);
                        navigate("/blogs")
                    }
                })
            }
            getAccessToken();
        }
        else if (code && localStorage.getItem("accessToken")){
            onData(true);
            navigate("/blogs")
        }
    }, []);

    return (
        <div>
            <button onClick={() => window.location.assign(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`)}>
                Login with GitHub
            </button>
        </div>
    );
};

export default Login;
