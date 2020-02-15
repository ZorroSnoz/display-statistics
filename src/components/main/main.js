import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './main.module.css';
import iphone_foto from '../../images/main/iphone.png';
import advantage_design_foto from '../../images/main/advantage_design.png';
import advantage_data_foto from '../../images/main/advantage_data.png';
import advantage_retina_foto from '../../images/main/advantage_retina.png';
import macbook_foto from '../../images/main/macbook.png';
import basic_foto from '../../images/main/basic.png';
import standart_foto from '../../images/main/standart.png';
import unlimited_foto from '../../images/main/unlimited.png';
import line from '../../images/main/line.png';

let Main = (props) => {
    return <div className={s.container}>
        <div className={s.header} >
            <div className={s.header_info_container}>
                <p className={s.logo}>AppCo</p>
                <h1><span>Brainstorming</span> for desired perfect Usability</h1>
                <p className={s.header_discription}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                <NavLink className={`${s.header_button} ${s.button} ${s.button_white}`} to='/stats'>View Stats</NavLink>
            </div>
            <div className={s.header_image_container}>
                <img src={iphone_foto} />
            </div>
        </div>
        <div className={s.advantage_container}>
            <div className={s.advantage_header}>
                <h2>Why <span>small business owners love</span> AppCo?</h2>
                <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            </div>
            <div className={s.advantage_content}>
                <div>
                    <img src={advantage_design_foto} />
                    <h3>Clean Design</h3>
                    <p>Increase sales by showing true dynamics of your website.</p>
                </div>
                <div>
                    <img src={advantage_data_foto} />
                    <h3>Secure Data</h3>
                    <p>Build your online store’s trust using Social Proof & Urgency.</p>
                </div>
                <div>
                    <img src={advantage_retina_foto} />
                    <h3>Retina Ready</h3>
                    <p>Realize importance of social proof in customer’s purchase decision.</p>
                </div>
            </div>

        </div>
        <div className={s.start_app_container} >
            <div className={s.start_app_info}>
                <h3>Start Managing your apps business, more faster</h3>
                <p>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
                <NavLink className={`${s.start_app_button} ${s.button} ${s.button_white}`} to='/'>Learn more</NavLink>
            </div>
            <img src={macbook_foto} />
        </div>
        <div className={s.pricing_container}>
            <div className={s.pricing_header}>
                <h3><span>Afforadble Pricing and Packages</span> choose your best one</h3>
                <p>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
            </div>
            <div className={s.pricing_content}>
                <div>
                    <h3>Basic</h3>
                    <img className={s.price_foto} src={basic_foto} />
                    <p className={s.pricing_price}>$29</p>
                    <img className={s.line} src={line} />
                    <p className={s.price_discription}>Push Notifications
Data Transfer
SQL Database
Search & SEO Analytics
24/7 Phone Support
2 months technical support
2+ profitable keyword</p>
                    <NavLink className={`${s.price_button} ${s.button} ${s.button_blue}`} to='/'>Purchase now</NavLink>
                </div>
                <div>
                    <h3>Standard</h3>
                    <img className={s.price_foto} src={standart_foto} />
                    <p className={s.pricing_price}>$149</p>
                    <img className={s.line} src={line} />
                    <p className={s.price_discription}>Push Notifications
Data Transfer
SQL Database
Search & SEO Analytics
24/7 Phone Support
2 months technical support
2+ profitable keyword</p>
                    <NavLink className={`${s.price_button} ${s.button} ${s.button_blue}`} to='/'>Purchase now</NavLink>

                </div>
                <div>
                    <h3>Unlimited</h3>
                    <img className={s.price_foto} src={unlimited_foto} />
                    <p className={s.pricing_price}>$39</p>
                    <img className={s.line} src={line} />
                    <p className={s.price_discription}>Push Notifications
Data Transfer
SQL Database
Search & SEO Analytics
24/7 Phone Support
2 months technical support
2+ profitable keyword</p>
                    <NavLink className={`${s.price_button} ${s.button} ${s.button_blue}`} to='/'>Purchase now</NavLink>

                </div>
            </div>
            <div className={s.pricing_contact}><p>If you need custom services or Need more? </p><NavLink to='/'>Contact us</NavLink></div>
        </div>
        <div className={s.footer_container} >
                <div className={s.footer_input}><input placeholder="Enter your email" type="text" /><button 
               className={`${s.button_blue} ${s.button}`} >Subscribe</button></div>
            <div className={s.footer_info_container}>
                <p className={s.logo_footer}>AppCo</p>
                <p>All rights reserved by ThemeTags</p>
                <p>Copyrights © 2019. </p>
            </div>
        </div>
    </div>
};

export default Main;