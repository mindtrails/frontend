import React, { useState } from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Login.css";

import Navbar from "../../common/components/navbar/Navbar";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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

const checkAuth = async () => {
    const response = await fetch("http://localhost:8080/auth", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
};

const logInUser = async (data: FormData, redirect: any) => {
    const response = await fetch("http://localhost:8080/auth", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: data.username,
            password: data.password,
        }),
    });
    console.log(Array.from(response.headers.entries()));

    if (response.status === 204) {
        const test = await checkAuth();
        console.log(await test.text());

        setTimeout(() => redirect("/"), 1000);
        return "Login successful.";
    } else return (await response.json()).message;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const [resp, setResp] = useState("");

    const onSubmit = async (data: FormData) =>
        setResp(await logInUser(data, redirect));

    const redirect = useNavigate();

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
                    <p
                        className="simpleField"
                        style={{
                            color:
                                resp !== "Login successful." ? "red" : "green",
                        }}
                    >
                        {resp}
                    </p>
                    <a href="/register" className="registerInstead">
                        Not a member? Signup now
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Login;
