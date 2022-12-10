import React, { useState } from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Register.css";

import Navbar from "../../common/components/navbar/Navbar";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const postUser = async (data: FormData, redirect: any) => {
    const response = await fetch("http://localhost:8080/users", {
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
    console.log(response);

    if (response.status === 204) {
        setTimeout(() => redirect("/login"), 1000);
        return "Successfully created a new account.";
    } else return (await response.json()).message;
};

const schema = yup
    .object({
        username: yup.string().required("No username provided."),
        email: yup
            .string()
            .email("Not a valid email address.")
            .required("No email provided."),
        password: yup
            .string()
            .min(8, "Password is too short - should be 8 characters minimum.")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Password must contain at least one letter, one number and one special character."
            ),
        confirmPassword: yup
            .string()
            .required("No password provided")
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    .required();

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: yupResolver(schema) });
    const [resp, setResp] = useState("");

    const redirect = useNavigate();

    const onSubmit = async (data: FormData) =>
        setResp(await postUser(data, redirect));

    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer">
                <form
                    className="loginRegisterForm"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="loginRegisterFormTitle">CREATE ACCOUNT</div>
                    <input
                        type="text"
                        {...register("username")}
                        placeholder="Username"
                    />
                    <p className="fieldError">{errors.username?.message}</p>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Email"
                    />
                    <p className="fieldError">{errors.email?.message}</p>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Password"
                    />
                    <p className="fieldError">{errors.password?.message}</p>
                    <input
                        type="password"
                        {...register("confirmPassword")}
                        placeholder="Confirm Password"
                    />
                    <p className="fieldError">
                        {errors.confirmPassword?.message}
                    </p>
                    <input type="submit"></input>
                    <p
                        className="simpleField"
                        style={{
                            color:
                                resp !== "Successfully created a new account."
                                    ? "red"
                                    : "green",
                        }}
                    >
                        {resp}
                    </p>
                    <a href="/login" className="registerInstead">
                        Already a member? Sign in
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Register;
