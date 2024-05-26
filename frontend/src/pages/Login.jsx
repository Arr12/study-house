import React, { useEffect, useState } from "react";
import axios from "axios";
import { Clear } from "@mui/icons-material";

export default function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        const { username, password } = document.forms[0];
        await axios({
            method: "post",
            url: `${
                process.env.APP_API_URL
                    ? process.env.APP_API_URL
                    : "http://localhost:8000"
            }/v1/api/login`,
            data: {
                username: username.value,
                password: password.value,
            },
        })
            .then((response) => {
                setIsSubmitted(false);
                localStorage.setItem("token", JSON.stringify(response.data));
                window.location.replace("/admin/dashboard");
            })
            .catch((response) => {
                setIsSubmitted(false);
                setAlert({
                    message: (
                        <div className="flex items-center">
                            <Clear />
                            <span className="ml-3">
                                Wrong Username or Password
                            </span>
                        </div>
                    ),
                    type: "danger",
                });
                setTimeout(() => {
                    setAlert({ message: false, type: false });
                }, 4000);
            });
    };
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("token"))?.access_token) {
            window.location.replace("/admin/dashboard");
        }
    }, []);
    const [alert, setAlert] = useState("");
    return (
        <>
            {alert?.type === "danger" ? (
                <div className="w-80 bg-red-700 text-white py-5 px-3 rounded-lg mb-5 absolute bottom-5 right-5">
                    <p>{alert?.message}</p>
                </div>
            ) : (
                alert?.type === "success" && (
                    <div className="w-80 bg-green-500 text-white py-5 px-3 rounded-lg mb-5 absolute bottom-5 right-5">
                        <p>{alert?.message}</p>
                    </div>
                )
            )}
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="/"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                    >
                        <img
                            src="/images/1.png"
                            srcSet="/images/1.png"
                            className="w-24 xl:w-28"
                            alt=""
                            width={"auto"}
                            height={"auto"}
                        />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form
                                onSubmit={handleOnSubmit}
                                className="space-y-4 md:space-y-6"
                            >
                                <div>
                                    <label
                                        for="username"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="example"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-gray-800 border-[1px] border-gray-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    disabled={isSubmitted}
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
