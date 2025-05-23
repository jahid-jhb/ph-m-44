import { DynamicIcon } from 'lucide-react/dynamic';
import React, { useState } from 'react';

const NavBar = () => {

    const [menuBarShow, setMenuBarShow] = useState(true);

    const navigationData = [
        {
            id: 1,
            name: "Home",
            path: "/home"
        },
        {
            id: 2,
            name: "About Us",
            path: "/about"
        },
        {
            id: 3,
            name: "Services",
            path: "/services"
        },
        {
            id: 4,
            name: "Blog",
            path: "/blog"
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact"
        }
    ];

    const handleMenuBar = () =>{
        setMenuBarShow(!menuBarShow);
    }



    return (
        <nav className='flex justify-between  mx-2 mt-3'>

            {/* Mobile Responsive */}
            <div className='sm:hidden'>
                <button className='duration-1000' onClick={handleMenuBar}>
                    <DynamicIcon className='duration-1000' name={menuBarShow ? 'align-left' : 'x'} />
                </button>

                <ul className={`absolute ${menuBarShow ? '-top-52' : 'top-14'} duration-1000 flex flex-col gap-2 bg-[#ff726d30] p-3 pr-9 rounded-[4px]`}>
                    {
                        navigationData.map(route => <li key={route.id}><a href={route.path} className='text-start'>{route.name}</a></li>)
                    }
                </ul>

            </div>

            {/* nav_logo_area */}
            <div>
                <h3 className='text-3xl font-semibold text-amber-100'>PH M44</h3>
            </div>

            {/* nav_center_area */}
            <ul className='list-none hidden sm:flex gap-2'>
                {
                    navigationData.map(route => <li key={route.id}><a href={route.path} className='btn btn-ghost p-0 text-start'>{route.name}</a></li>)
                }
            </ul>

            {/* nav_sign_in/up_area */}
            <div className='flex gap-2'>
                <button className='btn btn-primary'>Sign In</button>
                <button className='btn btn-primary'>Sign Up</button>
            </div>
        </nav>
    );
};

export default NavBar;