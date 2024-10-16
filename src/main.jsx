import { useState } from 'react'

import './scss/style.css'
import ClinicCard from './Clinic-card';

function Main() {

  return (
    <>
    <section className='hero'>
        <div className='left'></div>
        <div className='right'>
            <div className='tagline'>
                <h2>YOUR HEALTH DESERVES</h2>
                <h2>A WINNING EDGE</h2>
            </div>
            
          
     
            <p>Vital Vintage is a healthcare assistance service that specializes in appointment setting to streamline patient care.</p>
            <h3 className='emergency'> Emergency Hotline: +639564793554</h3>
        </div>
        
    </section>
    <section className='clinics'>
        <h1 className='section-title'>Clinics</h1>
        <div className='clinic-group-wrapper'>
            <ClinicCard
                title='OB-GYN'
                image='/src/assets/obgyn.png'
                services={[
                'Prenatal Checkups',
                'Postnatal Care',
                'Gynecological Exams',
                ]}
                link='/obgyn-book'
                id='obgyn-book'
            />

            <ClinicCard
                title='PEDIATRICS'
                image='/src/assets/pedia.png'
                services={[
                'Prenatal Checkups',
                'Postnatal Care',
                'Gynecological Exams',
                ]}
                link='/pedia-book'
                id='pedia-book'
            />

            <ClinicCard
                title='CARDIOLOGY'
                image='/src/assets/cardio.png'
                services={[
                'Prenatal Checkups',
                'Postnatal Care',
                'Gynecological Exams',
                ]}
                link='/cardio-book'
                id='cardio-book'
            />

            <ClinicCard
                title='DENTISTRY'
                image='/src/assets/dental.png'
                services={[
                'Prenatal Checkups',
                'Postnatal Care',
                'Gynecological Exams',
                ]}
                link='/dentistry-book'
                id='dentistry-book'
            />

            <ClinicCard
                title='MENTAL'
                image='/src/assets/mental.png'
                services={[
                'Prenatal Checkups',
                'Postnatal Care',
                'Gynecological Exams',
                ]}
                link='/mental-book'
                id='mental-book'
            />
       


        </div>

    </section>
     
    </>
  )
}

export default Main;
