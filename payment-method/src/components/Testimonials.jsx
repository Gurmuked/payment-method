import React from 'react';
import styles from '../style';
import {feedback} from '../constants';
import FeedbackCard from './Feedback';

const Testimonials = () => (  
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='w-full flex justify-between items-centermd:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h4 className={`${styles.heading2}`}>
          What people are <br className='sm:block hidden'/> saying about us
        </h4>
        <div className='w-full md:mt-0 mt-6'>
        <p className={`$${styles.paragraph} text-left max-w-[450px]`}>
          Everthing you need to accept card payment and grow your business anywhere on the planet.
        </p>

        </div>
      </div>
    
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[2]'>
          {feedback.map((card) => ( 
            <FeedbackCard key={card.id} {...card} />
            ))}
      </div> 
  </section>
)

export default Testimonials