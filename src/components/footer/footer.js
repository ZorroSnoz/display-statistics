import React from 'react';
import s from './footer.module.css';

let Footer = (props) => {
    return <div className={s.footer}>
        <div>
            <p>AppCo</p>
            <p>All rights reserved by ThemeTags</p>
            <p>Copyrights © 2019.</p>
        </div>
    </div>
};

export default Footer;