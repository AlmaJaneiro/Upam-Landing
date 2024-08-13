import React, { Fragment } from 'react';
import image from "../../assets/img/hero-banner.png";
import newWave from "../../assets/img/shape.png";
import Button from '../Button/Button';
import Wave from './Wave';

export default function Header() {
  return (
    <Fragment>
        <section className='header-section'>
            <div className='header-row'>
                <div className='header-title'>
                    <h1>Transferring money made secure and swift</h1>
                    <p>Welcome to our money transfer platform, where we provide secure and convenient solutions for sending and receiving money across borders.</p>
                    <Button 
                        title={'Send money NoW'}
                        aria={'Click here to send money'}
                        href={'/contact/'}
                        classN={'btn-primary'}
                    />
                </div>
                <div className='header-imgae'>
                    <img
                        alt='Hero'
                        src={image}    
                    />
                </div>
            </div>
        </section> 
        <Wave 
        
        newImage={newWave}
        />
    </Fragment>
  )
}
