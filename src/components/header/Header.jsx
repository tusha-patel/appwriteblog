import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../container/Container';
import Logo from '../Logo';
import LogoutBtn from './LogoutBtn';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    let navItems = [
        {
            name: "home",
            slug: "/",
            active: true,
        },
        {
            name: "login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Sing up",
            slug: "/sing-up",
            active: !authStatus,
        },
        {
            name: "All posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add posts",
            slug: "/add-posts",
            active: authStatus,
        }

    ]

    return (
        <>
            <header className='py-3 shadow bg-gray-500'>
                <Container>
                    <nav className='flex items-center'>
                        <div className="mr-4">
                            <Link to={"/"}>
                                <Logo />
                            </Link>
                        </div>
                        <ul className='flex ml-auto items-center'>
                            {
                                navItems?.map((item) =>
                                    item.active ?
                                        (
                                            <li><button className='inline-bock capitalize px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={() => navigate(item.slug)} >
                                                {item.name}</button></li>
                                        ) : null)
                            }
                            {
                                authStatus && (
                                    <li>
                                        <LogoutBtn />
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    );
}

export default Header;
