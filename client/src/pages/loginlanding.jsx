import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react";
import LoginLeftSide from "../components/loginleftside";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Loading from "../components/Loading";

const LoginLanding = () => {

     const {user, loading} = useAuth()
      if(loading) return <Loading />
      if(user) return <Navigate to="/dashboard" />

    const portalOptions = [
        {
            to: "/login/admin",
            title: "Admin portal",
            description: "Manage employees, departments,payroll, and system configuration",
            icon: ShieldIcon
        },
        {
            to: "/login/employee",
            title: "Employee portal",
            description: "View your profile, track attendance, request time off, and access payslips",
            icon: UserIcon
        }

    ]


    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <LoginLeftSide />

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">


                <div className="w-full max-w-md animate-fade-in relative z-10">
                    {/* header */}
                    <div className="text-center mb-10 md:text-left">
                        <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">Welcome Back</h2>
                        <p className="text-slate-500">Select your system to securely access the system</p>
                    </div>



                    {/* Portals list */}

                    <div className="space-y-4">
                        {portalOptions.map((portal) => (
                            <Link key={portal.to} to={portal.to} className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300">

                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">
                                            {portal.title}
                                        </h3>

                                        <p className="text-sm text-slate-500 mt-1">
                                            {portal.description}
                                        </p>
                                    </div>

                                    <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                                </div>

                            </Link>
                        ))}

                    </div>



                    {/* Footer */}

                    <div className="mt-12 text-center md:text-left text-sm text-slate-400">
                        <p>© {new Date().getFullYear()} Muhammad Muizz. All Rights Reserved.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoginLanding;