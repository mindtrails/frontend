import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Login.css";

import Navbar from "../../common/components/navbar/Navbar";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
    username: string;
    password: string;
};

const schema = yup
    .object({
        username: yup.string().required("No username provided."),
        password: yup.string().required("No password provided."),
    })
    .required();

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer">
                <form
                    className="loginRegisterForm"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="loginRegisterFormTitle">LOGIN</div>
                    <input
                        type="text"
                        {...register("username")}
                        placeholder="Username"
                    />
                    <p className="fieldError">{errors.username?.message}</p>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Password"
                    />
                    <p className="fieldError">{errors.password?.message}</p>
                    <a href="/register" className="forgotPassword">
                        Forgot password?
                    </a>
                    <input type="submit"></input>
                    <a href="/register" className="registerInstead">
                        Not a member? Signup now
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Login;
