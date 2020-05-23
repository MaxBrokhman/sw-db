import React from 'react';
import{ Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/sw-db">
                Star DB
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/sw-db/people/">People</Link>
                </li>
                <li>
                    <Link to="/sw-db/planet/">Planets</Link>
                </li>
                <li>
                    <Link to="/sw-db/starship/">Starships</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
