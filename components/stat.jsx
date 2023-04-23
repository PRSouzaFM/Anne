import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Image from 'next/image';
function Stat() {
  const handleContactButtonClick = () => {
    window.location.href = 'https://wa.me/5511983872983?text=Bom%20dia%2C%20Anne.%20Vi%20o%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato.';
  }

  return (
    <div className='grid place-items-center align-middle bg-black'>
      <InView threshold={0.5}>
        {({ inView, ref }) => (
          <motion.div
            className=''
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <div className='grid place-items-center m-32 max-w-screen-sm'>

              <div className='grid place-items-center'>
                <h1 className="py-20 text-white text-center font-light text-4xl">VOCÊ SABIA?</h1>
              </div>

              <div className='grid place-items-center'>
                <CountUp end={inView ? 24 : 0} duration={5} className='text-white text-3xl' />
                <h1 className='font-mono text-white'>MESES</h1>
                <h1 className="text-white text-center font-light">Tempo médio para conclusão de um processo de divórcio na justiça comum</h1>
              </div>

              <div className='grid place-items-center my-10'>
                <CountUp end={inView ? 100000000 : 0} duration={5} className='text-white text-xl' />
                <h1 className="text-white text-center font-light">De processos em tramitação na justiça comum</h1>
              </div>
            </div>
            <div className='grid place-items-center my-4'>
              <h1 className="text-white text-center font-light my-5">Evite conflitos,</h1>
              <button className="btn btn-outline" onClick={handleContactButtonClick}>ENTRE EM CONTATO</button>
              <div className='flex items-center my-3'>
                <Image src="/ig.png" className='hover:cursor-pointer' width={50} height={50} onClick={() => window.location.href = 'https://www.instagram.com/adri.anne_mediacao_/'} draggable='false' alt='Scroll Down Mouse' />
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  )
}

export default Stat;
