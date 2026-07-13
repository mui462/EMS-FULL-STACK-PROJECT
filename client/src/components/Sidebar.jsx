import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {MenuIcon, UserIcon, XIcon} from "lucide-react"

const Sidebar = () => {

    const { pathname } = useLocation();
    const [username, setUsername] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
    setUsername(
        dummyProfileData.firstName + " " + dummyProfileData.lastName
    );
}, []);


    //close mobile sidebar on route change

     useEffect(()=>{
        setMobileOpen(false)
    },[pathname])

    const sidebarContent = (
        <>
           {/* Brand header */} 

                <div className="px-5 pt-6 pb-5 border-b border-white/6">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 ">
                        <UserIcon  className="text-white size-7"/>

                         <div>
                        <p className="font-semibold text-[13px] text-white tracking-wide">
                            Employee MS
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">Management System</p>
                    </div>

                    </div>
                    {/* close  button on mobile */} 
                        <button onClick={()=>setMobileOpen(false)} className="lg:hidden text-slate-400 hover:text-white p-1">
                            <XIcon size={20} />
                        </button>
                   

                </div>

                </div>
            {/* user profile card */} 

            {/* section label  */} 

            {/* Navigation List */} 

            {/* logout */} 

        </>
    )


    return (
        <>
           {/*Mobile hamburger button */}

           <button onClick={()=>setMobileOpen(true)} className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10">
              <MenuIcon size={20} />
           </button>

           {/*Mobile overlay */}

           {mobileOpen && <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"   onClick={()=>setMobileOpen(false)}/>}

           {/*sidebar - Desktop */}
           <aside className="hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4">
            {sidebarContent}
           </aside>

            {/*sidebar - Mobile */}

           <aside
  className={`lg:hidden fixed inset-y-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 ${
    mobileOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {sidebarContent}
</aside>
        </>
    );
};

export default Sidebar;