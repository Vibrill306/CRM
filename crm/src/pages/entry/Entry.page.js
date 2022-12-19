import React from 'react';
import './entry.style.css'
import { LoginForm } from '../../components/login/Login.comp';
import {useState} from "react";
import { ResetPassword } from '../../components/password-reset/PasswordRest.comp';

export const Entry = () => {

    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [frmLoad , setFrmLoad] = useState("login");

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        switch(name){
            case "email":
                setEmail(value);
                break;
            
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
        console.log(name,value);
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(!email || !password){
          return alert("Fill up all the form!")
        }

        //Todo call api to submit the form
        console.log(email,password)
    };
    const handleOnResetSubmit = e => {
        e.preventDefault()

        if(!email){
          return alert("Please enter the email!")
        }

        //Todo call api to submit the form
        console.log(email);
    };

    const formSwitcher = frmType =>{
        setFrmLoad(frmType)
    }
    return(
        <div className='entry-page bg-info'>
            {frmLoad === "login" && (
                <LoginForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
            />
            )}
            {frmLoad === "reset" && (
             <ResetPassword 
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
            />
            )}
        </div>
    )
}