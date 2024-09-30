import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services} from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index , 0.75)}
        className='w-full blue-yellow-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-cols'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText2}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a motivated young man, ready to take on challenges. My choice of orientation fell on IT because I have the will
        to build a better environment by creating concrete tools to help the people around me and more

        <br />
        <br />

        My motivation to help others and shape a better world pushes me every day to invest more in society.
        Putting my skills and time at the disposal of others for more than eight years in my youth movement,
        I am an available and attentive person. As a result, I contributed to the creation of numerous projects with an 
        important social impact.

        <br />
        <br />

        Another of my qualities consists of my social relationships. In addition to having learned to manage both activities and cash flow,
        my experience in a youth movement has allowed me to better communicate and share as a team. It is in my opinion
        important to be able to give your opinion but also to listen and take into consideration that of others and above all to
        be enriched by these exchanges. My independent work therefore knows how to be perfectly linked to team work, thanks to the
        discussions and planning in the latter.

        <br />
        <br />

        Having always lived in the countryside, I feel close to nature. It occupies an important place in my life, and in
        that of those around me. Protecting nature is one of the values ​​I hold. In addition to having transmitted
        the importance of ecology to the children of my youth movement, I fight every day to reduce my impact
        environmental and today I seek to see bigger than daily actions.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key= {service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")