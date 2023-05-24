import React from 'react';
import classes from '../../styles/pages/Main/History.module.scss'
import Layout from "../../components/Layout";
import history_title from '../../assets/main/history_title.png'
import history_background from '../../assets/main/history_background.png'
import history_image from '../../assets/main/history_image.png'
import logo from '../../assets/logo.png'
import {BsTelephone} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
const History = () => {
    return (
        <div className={classes['History']}
             style={{backgroundImage: `url(${history_background})`}}
        >
            <Layout>
                <div className={classes['History__container']}>
                    <div className={classes['History__container-title']}>
                        <div className={classes['History__container-title-name']}>
                            ИСТОРИЯ ПРОКО “ОБЩЕСТВО ДРУЖБЫ С ЯПОНИЕЙ”
                        </div>
                        <div className={classes['History__container-title-image']}
                             style={{backgroundImage: `url(${history_title})`}}
                        />
                    </div>
                    <div className={classes['History__container-info']}>
                        <div className={classes['History__container-info-image']}
                             style={{backgroundImage: `url(${history_image})`}}
                        />
                        <div className={classes['History__container-info-text']}>
                            <div className={classes['History__container-info-text-quotes']}>
                                ”
                            </div>
                            <div className={classes['History__container-info-text-text']}>
                                1998-1999:  Приезд во Владивосток рекомендованной обществом дружбы Японии первой делегации из префектуры Тояма, в руководящем составе 8 человек общества «Тояма-Россия». Цель визита - установить с «Обществом дружбы с Японией» Приморья долгосрочные дружеские культурные связи.
                                <br/><br/>
                                Затем последовали ответные визиты нашей организации в преф.Тояма, где были впервые провозглашены японской стороной и услышаны нами слова: «Японское море-море дружбы», которые идут лейтмотивом в совместной деятельности двух общественных организации уже более 20 лет. Впоследствии деятельность «Общества дружбы с Японией» переросла границы преф. Тояма, но и раньше, да и теперь в наше сложное время, на первом месте всегда стоит тоямское общество дружбы, где мы работаем с командой партнеров.
                                <br/><br/>
                                Мы продолжали активно сотрудничать, пришли новые члены общества и среди них- председатель г-н Ямада Хироси, ответственный секретарь г-н Сираиси Ясухито и др.
                                <br/><br/>
                                Естественно, в своей работе мы сразу сделали упор на долгосрочные программы сотрудничества . Их было несколько, они с течением времени преобразовывались. Но основные направления устоялись уже в первое десятилетие .
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['History__footer']}>
                    <div className={classes['History__footer-logo']}>
                        <div className={classes['History__footer-logo-image']}
                             style={{backgroundImage: `url(${logo})`}}
                        />
                        <div className={classes['History__footer-logo-text']}>
                            Общество <br/> дружбы <br/>с Японией
                        </div>
                    </div>
                    <div className={classes['History__footer-nav']}>
                        <div className={classes['History__footer-nav-item']}>
                            Главная
                        </div>
                        <div className={classes['History__footer-nav-item']}>
                            О нас
                        </div>
                        <div className={classes['History__footer-nav-item']}>
                            История
                        </div>
                    </div>
                    <div className={classes['History__footer-contacts']}>
                        <div className={classes['History__footer-contacts-contact']}>
                            <div className={classes['History__footer-contacts-contact-icon']}>
                                <BsTelephone/>
                            </div>
                            <div className={classes['History__footer-contacts-contact-links']}>
                                <div className={classes['History__footer-contacts-contact-links-phone']}>
                                    + 7 (999) 999-91-92
                                </div>
                                <div className={classes['History__footer-contacts-contact-links-email']}>
                                    contact@odjapan.ru
                                </div>
                            </div>

                        </div>
                        <div className={classes['History__footer-contacts-links']}>
                            <div className={classes['History__footer-contacts-links-item']}>
                                <FaWhatsapp/>
                            </div>
                            <div className={classes['History__footer-contacts-links-item']}>
                                <FiMail/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['History__company']}>
                    ПРИМОРСКАЯ РЕГИОНАЛЬНАЯ ОБЩЕСТВЕННАЯ КУЛЬТУРНАЯ ОРГАНИЗАЦИЯ "ОБЩЕСТВО ДРУЖБЫ С ЯПОНИЕЙ"  ИНН:2536225190 КПП: 254301001
                    <br/>690033, ПРИМОРСКИЙ КРАЙ, Г. ВЛАДИВОСТОК, УЛ. ГАМАРНИКА, ДОМ 16, КВ. 131
                </div>
            </Layout>
        </div>
    );
};

export default History;