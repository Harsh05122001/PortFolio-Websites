import React, { useContext } from 'react';
// import images

// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <>
    <motion.section
    
      className='section'
    >
      <div className='container mx-auto h-full relative over'>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Yeh Ho Nhi Skta</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
           
          </div>
          
          {/* image grid */}
          <div
            className='grid grid-cols-2 lg:gap-2'
          >
            <iframe width="520" height="315"     
            src="https://www.youtube.com/embed/d1XPKTJDsc4">
              
            </iframe>
            {/* image */}
            {/* <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
            </div> */}
          </div>


          
       
          
          
          
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8' >
          {/* text */}

          
          
          {/* image grid */}
          <iframe width="520" height="415"     
            src="https://www.youtube.com/embed/watch?v=8drnq8aO8ro&list=PLSrKb8MGBdzi8YA2LQRJe-vqpyn6SCB1K">
              
            </iframe>
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Tuition</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
          
          </div>       
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8' >
          {/* text */}

          
          
          {/* image grid */}
         
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Dikri</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
           
          </div>
          <iframe width="520" height="415"     
            src="https://www.youtube.com/embed/Ydwv1v11mC8">
              
            </iframe>


          
       
          
          
          
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}

          
          
          {/* image grid */}
          <iframe width="520" height="415"     
            src="https://www.youtube.com/embed/oJL8-5ATs7c">
              
            </iframe>
         
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Meri Kahani</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
         
          </div>
         


          
       
          
          
          
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>The FootWear Story</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>     
          </div>
          <iframe width="520" height="415"  
            src="https://www.youtube.com/embed/6oHmS_p1b08">
              
            </iframe>
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}

          
          
          {/* image grid */}
          <iframe width="520" height="415"    
            src="https://www.youtube.com/embed/17l5wST5Ndg ">
              
            </iframe>
         
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Hard Work | Short Film</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
         
          </div>
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Bas Cha Sudhi Navi Safar 2</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>     
          </div>
          <iframe width="520" height="415"     
            src="https://www.youtube.com/embed/playlist?list=PL0FHWXpav3cL5titNkZnCeltRxy1w1dZ-">
              
            </iframe>
        </div>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}

          
          
          {/* image grid */}
          <iframe width="520" height="415"    
            src="https://www.youtube.com/embed/Ayls0dUq7uY ">
              
            </iframe>
         
          <div
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>The Repairmen</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
         
          </div>
        </div>
        
      </div>

      
    </motion.section>
  
    
    </>
  );
};

export default Portfolio;
