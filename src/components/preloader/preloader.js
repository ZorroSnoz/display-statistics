import React from 'react';
import preloader from '../../images/preloader.svg';
import s from './preloader.module.css';

let Preloader = () => {
return <div className={s.preloaderContainer}><img alt='preloader' src={preloader}/></div>
};

export default Preloader;