import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook
function Chat() {
  const [chat2Ref, chat2InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat2 is in view
  const [chat1Ref, chat1InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat1 is in view
  const [chat3Ref, chat3InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat3 is in view
  const [chat4Ref, chat4InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat4 is in view
  const [chat5Ref, chat5InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat5 is in view
  const [chat6Ref, chat6InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat6 is in view
  const [chat7Ref, chat7InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat6 is in view
  const [chat8Ref, chat8InView] = useInView({ threshold: 0.8 }); // Use the useInView hook to detect when chat6 is in view

  return (

    <div className='h-[120vh] sm:h-screen min-h-screen bg-black place-items-center sm:p-52'>
      <motion.div
        ref={chat1Ref}
        className='chat chat-start'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat1InView ? 1 : 0, y: chat1InView ? 0 : -50 }} // Trigger the animation based on chat1InView
        transition={{ duration: 0.5 }}
      >
        <div className='chat-bubble'>O que é a mediação?</div>
      </motion.div>
      <motion.div
        ref={chat2Ref}
        className='chat chat-end'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat2InView ? 1 : 0, y: chat2InView ? 0 : -50 }} // Trigger the animation based on chat2InView
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="./attorney.jpg" />
          </div>
        </div>
        <div className='chat-bubble'>
          A mediação é um processo colaborativo e eficaz de resolução de conflitos, onde um mediador ajuda as partes a encontrarem uma solução mutuamente satisfatória.
        </div>
      </motion.div>

      <motion.div
        ref={chat3Ref}
        className='chat chat-start'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat3InView ? 1 : 0, y: chat3InView ? 0 : -50 }} // Trigger the animation based on chat3InView
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className='chat-bubble'>Como funciona na prática?</div>
      </motion.div>

      <motion.div
        ref={chat4Ref}
        className='chat chat-end'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat4InView ? 1 : 0, y: chat4InView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="./attorney.jpg" />
          </div>
        </div>
        <div className='chat-bubble'>O processo de mediação envolve uma sessão inicial com o mediador estabelecendo regras, permitindo que as partes exponham suas preocupações, identificando interesses e necessidades, e gerando opções de acordo.</div>
      </motion.div>

      <motion.div
        ref={chat5Ref}
        className='chat chat-end'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat5InView ? 1 : 0, y: chat5InView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="./attorney.jpg" />
          </div>
        </div>
        <div className='chat-bubble'>O mediador é imparcial e neutro, ajudando as partes a chegarem a uma solução que funcione para ambas.</div>
      </motion.div>

      <motion.div
        ref={chat6Ref}
        className='chat chat-end'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat6InView ? 1 : 0, y: chat6InView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="./attorney.jpg" />
          </div>
        </div>
        <div className='chat-bubble'>A mediação é confidencial e voluntária, e pode ser aplicada em diversas áreas, como família, trabalho, negócios, e mais.</div>
      </motion.div>

      <motion.div
        ref={chat7Ref}
        className='chat chat-start'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat7InView ? 1 : 0, y: chat7InView ? 0 : -50 }} // Trigger the animation based on chat3InView
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className='chat-bubble'>E por que eu deveria escolher a mediação em vez de outros métodos de resolução de conflitos?</div>
      </motion.div>
      <motion.div
        ref={chat8Ref}
        className='chat chat-end'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: chat8InView ? 1 : 0, y: chat8InView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="./attorney.jpg" />
          </div>
        </div>
        <div className='chat-bubble'>
          Mediação é vantajosa por ser colaborativa, rápida, econômica e melhorar relacionamentos.
        </div>
      </motion.div>
    </div>
  );
}

export default Chat;
