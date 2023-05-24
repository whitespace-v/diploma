import React, {useState} from 'react';
import classes from '../../styles/pages/Main/Founders.module.scss'
import Layout from "../../components/Layout";
import founders_top from '../../assets/main/main_founders_top.png'
import founders_bottom from '../../assets/main/main_founders_bottom.png'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {MainFoundersSliderData} from '../../Data'
import {backIndexHandler, forwardIndexHandler} from "../../utils/slider";

const Founders = () => {
    const [founderIndex, setFounderIndex] = useState<number>(0)

    return (
        <div className={classes['Founders']}>
            <div className={classes['Founders__top']}>
                <Layout>
                    <div className={classes['Founders__top-image']}>
                        <div className={classes['Founders__top-image-title']}>
                            ОБЩЕСТВО ДРУЖБЫ С ЯПОНИЕЙ 
                        </div>
                        <img className={classes['Founders__top-image-source']}
                             src={MainFoundersSliderData[founderIndex].image} alt=""
                        />
                    </div>
                    <div className={classes['Founders__top-info']}>
                        <div className={classes['Founders__top-info-image']}
                             style={{backgroundImage: `url(${founders_top})`}}
                        >
                        </div>
                        <div className={classes['Founders__top-info-block']}>
                            <div className={classes['Founders__top-info-block-title']}>
                                ДОЛЖНОСТЬ
                            </div>
                            <div className={classes['Founders__top-info-block-text']}>
                                <div className={classes['Founders__top-info-block-text-title']}>
                                    {MainFoundersSliderData[founderIndex].job.title}
                                </div>
                                <div className={classes['Founders__top-info-block-text-text']}>
                                    {MainFoundersSliderData[founderIndex].job.text}
                                </div>
                            </div>
                        </div>
                        {/*<div className={classes['Founders__top-info-block']}>*/}
                        {/*    <div className={classes['Founders__top-info-block-title']}>*/}
                        {/*        ОБЯЗАННОСТИ*/}
                        {/*    </div>*/}
                        {/*    <div className={classes['Founders__top-info-block-text']}>*/}
                        {/*        <div className={classes['Founders__top-info-block-text-title']}>*/}
                        {/*            {MainFoundersSliderData[founderIndex].responsibilities.title}*/}
                        {/*        </div>*/}
                        {/*        <div className={classes['Founders__top-info-block-text-text']}>*/}
                        {/*            {MainFoundersSliderData[founderIndex].responsibilities.text}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </Layout>
            </div>
            <div className={classes['Founders__bottom']} style={{backgroundImage: `url(${founders_bottom})`}}>
                <Layout>
                    <div className={classes['Founders__bottom-selector']}>
                        <div className={classes['Founders__bottom-selector-title']}>
                            {MainFoundersSliderData[founderIndex].name}
                        </div>
                        <div className={classes['Founders__bottom-selector-container']}>
                            <div className={classes['Founders__bottom-selector-container-arrow']}
                                 onClick={() => backIndexHandler(founderIndex, setFounderIndex, MainFoundersSliderData)}
                            >
                                <IoIosArrowBack/>
                            </div>
                            <div className={classes['Founders__bottom-selector-container-index']}>
                                {founderIndex + 1}
                            </div>
                            <div className={classes['Founders__bottom-selector-container-line']}>
                                <div className={classes['Founders__bottom-selector-container-line-inner']}
                                     style={{width: 300 / (MainFoundersSliderData.length / (founderIndex + 1))}}
                                />
                            </div>

                            <div className={classes['Founders__bottom-selector-container-index']}>
                                {MainFoundersSliderData.length}
                            </div>
                            <div className={classes['Founders__bottom-selector-container-arrow']}
                                 onClick={() => forwardIndexHandler(founderIndex, setFounderIndex, MainFoundersSliderData)}
                            >
                                <IoIosArrowForward/>
                            </div>
                        </div>
                    </div>
                    <div className={classes['Founders__bottom-info']}>
                        {MainFoundersSliderData[founderIndex].text}
                    </div>
                </Layout>

            </div>
        </div>
    );
};

export default Founders;