import React, { useRef } from 'react';
import Flippy, { FrontSide } from 'react-flippy';
import logo from '../images/logo.png';
import { LinearProgress } from '@material-ui/core';

const LoadingCard = () => {
    const ref = useRef();

    return (
        <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={ref}
            className="card-container"
        >
            <FrontSide>
                <section className="loading-card">
                    <img alt="logo" src={logo} className="loading-image" />
                    <LinearProgress />
                </section>
            </FrontSide>
        </Flippy>
    );
};

export default LoadingCard;
