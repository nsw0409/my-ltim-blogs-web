import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Blogs = () => {
    const [authenticated, setauthenticated] = useState(false);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("accessToken");
        if (loggedInUser) setauthenticated(loggedInUser);
        else setauthenticated(null)
    }, []);
    if (authenticated === null) {
        return <Navigate replace to="/" />;
    } else {
        return (
            <div>
                <p>Welcome to your Dashboard page</p>
            </div>
        );
    }
}
export default Blogs;