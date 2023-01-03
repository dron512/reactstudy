import React from 'react';
import { Link } from 'react-router-dom';
import nav from './Nav.module.css';

function Nav() {
    return (
        <>
            <ul className={nav.navul}>
                <li className={nav.navli}>
                    <Link className={nav.nava} to="/Main">
                        메인
                    </Link>
                    <Link className={nav.nava} to="/FreeBoard">
                        자유게시판
                    </Link>
                    <Link className={nav.nava} to="/Member">
                        회원가입
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Nav;
