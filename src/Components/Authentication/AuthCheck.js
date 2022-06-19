import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {Navigate} from 'react-router-dom';



// const AuthCheck: FC<React.ComponentProps<typeof Route>> = (props) => {
    const AuthCheck = (props) => {
        const [token, setToken] = useState();
        

    // const token = Promise.resolve().then(()=> localStorage.getItem('token'));
    useEffect(() => {
        setToken(localStorage.getItem('user'));
    }, []);
    

        return (
           <Route path={props.path}> { token !== null ? props.children : <Navigate to='/'/> }</Route>
        );
   
};

export default AuthCheck;