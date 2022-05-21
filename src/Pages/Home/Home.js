// import { Typography } from '@mui/material';
import React from 'react';
// import JibonSlider from '../../jibon-slider/Jibon-Slider';
import Advicements from '../Advicements/Advicements';
// import Advicements from '../Advicements/Advicements';
import Banner from '../Banner/Banner';
import MintablePro from '../Minitable/MintablePro';
import NftSelling from '../NftSelling/NftSelling';
import Navigation from '../Shared/Navigation/Navigation';

import TopSlider from '../TopSlider/TopSlider';
// import TopCollections from '../TopCollections/TopCollections';
import MintableAcademy from '../MintableAcademy/MintableAcademy';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <Advicements />
            <TopSlider />
            {/* <JibonSlider /> */}
            {/* <TopCollection/> */}

            <NftSelling />
            <MintablePro />
            <MintableAcademy/>
           <Footer/>
        </>
    );
};

export default Home;