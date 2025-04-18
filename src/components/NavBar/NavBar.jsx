import { AlignLeft } from 'lucide-react';
import React from 'react';

const NavBar = () => {

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



    return (
        <nav className='flex justify-between  mx-2 mt-3'>

            {/* Mobile Responsive */}
            <div className='sm:hidden'>
                <AlignLeft className='' />

                <ul className='flex flex-col gap-2 bg-[#ff726d30] p-3 pr-9 rounded-[4px]'>
                    {
                        navigationData.map(route => <li key={route.id}><a href={route.path} className='text-start'>{route.name}</a></li>)
                    }
                </ul>


                {/* <div className='flex flex-col gap-2 bg-blue-900 p-3 rounded-[4px]'>
                    <li><a href='/' className='btn btn-ghost p-0 text-start'>Home</a></li>
                    <li><a href='/blogs' className='btn btn-ghost p-0'>Blogs</a></li>
                    <li><a href='/about_us' className='btn btn-ghost p-0'>About Us</a></li>
                    <li><a href='/contact_us' className='btn btn-ghost p-0'>Contact Us</a></li>
                </div> */}
            </div>

            {/* nav_logo_area */}
            <div>
                <h3 className='text-3xl font-semibold text-amber-100'>PH M44</h3>
            </div>

            {/* nav_center_area */}
            {/* <div className=''>
                <a href='/' className='btn btn-ghost p-0'>Home</a>
                <a href='/blogs' className='btn btn-ghost p-0'>Blogs</a>
                <a href='/about_us' className='btn btn-ghost p-0'>About Us</a>
                <a href='/contact_us' className='btn btn-ghost p-0'>Contact Us</a>
            </div> */}

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