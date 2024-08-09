import React, { Fragment } from 'react';
import image from "../../assets/img/hero-banner.png";
export default function Header() {
  return (
    <Fragment>
        <section className='header-section'>
            <div className='header-row'>
                <div className='header-title'>
                    <h1>Transferring money made secure and swift</h1>
                    <p>Welcome to our money transfer platform, where we provide secure and convenient solutions for sending and receiving money across borders.</p>
                </div>
                <div className='header-imgae'>
                    <img
                    alt='Hero'
                        src={image}    
                    />
                </div>
            </div>
        </section>
    </Fragment>
  )
}
