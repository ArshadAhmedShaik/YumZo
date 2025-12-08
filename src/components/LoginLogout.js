import { useState, useEffect } from "react";


const LoginLogout = () => {

    const [ initialState , setInitialState ] = useState("login");

    return (
        <button className={initialState} onClick={
                () => {
                    if(initialState==="login") {
                        setInitialState("logout");
                    }
                    else {
                        setInitialState("login");
                    }
                }
        }>{initialState}</button>
    );
}

export default LoginLogout;