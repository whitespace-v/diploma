import React, {useEffect, useState} from 'react';
import classes from '../styles/components/Header.module.scss'
import Layout from "./Layout";
import logo from '../assets/logo.png'
import {BsTelephone} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
const Header = ({offset}: {offset: boolean}) => {

    return (
        <div className={offset ? classes['Header'] + ' ' +  classes['filled']: classes['Header']}>
            <Layout>
                <div className={classes['Header__row']}>
                    <div className={classes['Header__row-contacts']}>
                        <div className={classes['Header__row-contacts-icon']}>
                            <BsTelephone/>
                        </div>
                        <div className={classes['Header__row-contacts-links']}>
                            <div className={classes['Header__row-contacts-links-phone']}>
                                +7 (999) 999-99-99
                            </div>
                            <div className={classes['Header__row-contacts-links-phone']}>
                                contacts@gs.com
                            </div>
                        </div>
                    </div>
                    <div className={classes['Header__row-logo']}>
                        <div className={classes['Header__row-logo-image']}
                             style={{backgroundImage: `url(${logo})`}}
                        />
                        <div className={classes['Header__row-logo-name']}>
                            Общество <br/>дружбы <br/> с Японией
                        </div>
                    </div>
                    <div className={classes['Header__row-links']}>
                        <div className={classes['Header__row-links-item']}>
                            <FaWhatsapp/>
                        </div>
                        <div className={classes['Header__row-links-item']}>
                            <FiMail/>
                        </div>
                    </div>
                </div>
                <div className={classes['Header__row-line']}/>
                <div className={classes['Header__row']}>
                    <div className={classes['Header__row-nav']}>
                        <div className={classes['Header__row-nav-item']}>
                            ГЛАВНАЯ
                        </div>
                        <div className={classes['Header__row-nav-item']}>
                            ГЛАВНАЯ
                        </div>
                        <div className={classes['Header__row-nav-item']}>
                            ГЛАВНАЯ
                        </div>
                        <div className={classes['Header__row-nav-item']}>
                            ГЛАВНАЯ
                        </div>
                        <div className={classes['Header__row-nav-item']}>
                            ГЛАВНАЯ
                        </div>
                    </div>
                    <div className={classes['Header__row-contact']}>
                        ОБРАТНЫЙ ЗВОНОК
                    </div>
                </div>
                <div className={classes['Header__row-line']}/>
            </Layout>
        </div>

    );
};

export default Header;