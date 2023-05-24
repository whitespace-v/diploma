import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Main from "./pages/main/Main";
import './styles/index.scss'
import Founders from "./pages/main/Founders";
import History from "./pages/main/History";
const App = () => {
    const [offset, setOffset] = useState<boolean>(true)
    const ref = React.useRef<HTMLInputElement>(null);

    const scrollHandler = () => {
        if (ref.current) {
            if (ref.current.getBoundingClientRect().top !== 0){
                setOffset(true)
            } else {
                setOffset(false)
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

    return (
        <>
            <Header offset={offset}/>
            <Main headerRef={ref}/>
            <Founders/>
            <History/>
        </>
    );
};

export default App;