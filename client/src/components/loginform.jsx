import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LoginLeftSide from "./loginleftside";

const LoginForm = ({ role, title, subtitle }) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <LoginLeftSide />

            <div className="w-full max-w-md animate-fade-in">


                <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm mb-6">
                    <ArrowLeftIcon size={16} />
                    Back to portals

                   
                </Link>
                  <div>
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
                    {title}
                </h1>

                <p className="text-slate-500 text-sm sm:text-base mt-2">
                    {subtitle}
                </p>
            </div>
        </div>

                
            </div>
        </div>
    );
};

export default LoginForm;