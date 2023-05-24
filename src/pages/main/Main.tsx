import React, {LegacyRef, useState} from 'react';
import background from '../../assets/main/background.png'
import classes from '../../styles/pages/Main/Main.module.scss'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Layout from "../../components/Layout";
import {MainTextSliderData} from '../../Data'
import {MainImageSliderData} from '../../Data'
import {backIndexHandler, forwardIndexHandler} from "../../utils/slider";
const Main = ({headerRef}: {headerRef: LegacyRef<HTMLDivElement> | undefined}) => {
    const [textSliderIndex, setTextSliderIndex] = useState<number>(0)

    return (
        <div className={classes['Main']} style={{backgroundImage: `url(${background})`}} ref={headerRef}>
            <Layout>
                <div className={classes['Main__TextSlider']}>
                    <div className={classes['Main__TextSlider__pagination']}>
                        <div className={classes['Main__TextSlider__pagination-back']}
                             onClick={() => backIndexHandler(textSliderIndex,setTextSliderIndex, MainTextSliderData)}
                        >
                            <IoIosArrowBack/>
                        </div>
                        <div className={classes['Main__TextSlider__pagination-forward']}
                             onClick={() => forwardIndexHandler(textSliderIndex,setTextSliderIndex, MainTextSliderData)}
                        >
                            <IoIosArrowForward/>
                        </div>
                        {textSliderIndex + 1}<span>/ 3</span>
                    </div>
                    <div className={classes['Main__TextSlider-title']}>
                        {MainTextSliderData[textSliderIndex].title}
                    </div>
                    <div className={classes['Main__TextSlider-text']}>
                        {MainTextSliderData[textSliderIndex].text}
                    </div>
                    <div className={classes['Main__TextSlider-link']}>
                        <div className={classes['Main__TextSlider-link-icon']}>
                            <IoIosArrowForward/>
                        </div> СВЯЗАТЬСЯ С ОРГАНИЗАТОРАМИ
                    </div>
                </div>
            </Layout>
            <div className={classes['Main__ImageSlider']}>
                {MainImageSliderData.map(i =>
                    <div className={classes['Main__ImageSlider-item']} key={i.title}
                         style={{backgroundImage: `url(${i.image})`}}
                    >
                        <div className={classes['Main__ImageSlider-item-title']}>
                            {i.title}
                        </div>
                        <div className={classes['Main__ImageSlider-item-date']}>
                            {i.date}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;