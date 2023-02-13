import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import About from '../pages/about'


// const Home = lazy(() => import('../pages/home'));
// const About = lazy(() => import('../pages/about'));
// const BridgeContext = React.createContext(undefined)


const Index: React.FunctionComponent = () => {

    useEffect(()=>{},[])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Index
