import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from "../../store/actions";
import { CiUser, CiHeart } from "react-icons/ci";

import './Header.scss'

const Header = (props) => {
    const dispatch = useDispatch();

    const location = useLocation();
    const { isScrollTop } = props;


    const handleLogout = () => {
        dispatch(actions.process_Logout());
    }

    return (
        <div className='header-container'>
            <div className={isScrollTop ? 'header-content scrollTop' : 'header-content unScrollTop'}>
                <div className='left-content col-2'>
                    <div className='header_logo'>
                        <Link to='/home' className='image_logo'></Link>
                        <div className='name_page'>
                            <p>Vungmoigioi</p>
                            <span>Start a new life</span>
                        </div>
                    </div>
                </div>

                <div className='center-content col-5'>
                    <div className='layout-not-phone'>
                        <ul className='container'>
                            <Link to='/home'>
                                <li className={location.pathname === '/home' ? 'active' : 'no-active'}>
                                    Trang chủ
                                </li>
                            </Link>

                            <Link to='/product'>
                                <li className={location.pathname === '/product' ? 'active' : 'no-active'}>
                                    Dự án
                                </li>
                            </Link>

                            <Link to='/news'>
                                <li className={location.pathname + location.hash === '/booking' ? 'active' : 'no-active'}>
                                    Tin tức
                                </li>
                            </Link>

                            <Link to='/about'>
                                <li className={location.pathname + location.hash === '/about' || location.pathname + location.hash === '/home#photos' ? 'active' : 'no-active'}>
                                    Giới thiệu
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className='right-content col-5'>
                    <div className='favorite'>
                        <CiHeart className='icon_heart'/>
                    </div>
                    <div className='profile'>
                        <CiUser className='icon_profile' />
                        <p>Dang Nam</p>
                    </div>
                    <div className='logout'>
                        <button
                            onClick={() => { handleLogout() }}
                            className='btn-logout'
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Header;