import React from 'react'

export default function IntroSection() {
    return (
        <div className="w-full text-secondary h-auto md:h-screen bg-primary flex items-center justify-center" id="skill">
            <div className="w-4/5 md:w-8/12 flex flex-col items-center h-full justify-center">
                <div className='w-full flex h-full flex-col items-start justify-start gap-5 mt-20'>
                    <p className="text-green text-xl">Hi, my name is </p>
                    <p className='text-3xl md:text-5xl'>UJJWAL KUMAR</p>
                    <p className='font'>I Bulid Things For The Web</p>
                    <p className="w-full md:w-1/2 leading-7">A passionate aspiring Front-End Developer skilled in React, 
                        JavaScript, Es6. Moulded and shaped by SelfStudy, 
                        Actively ready to join in a great lively team of 
                        a good start-up to adapt me in any situation and 
                        environment with ease and perform the best.
                    </p>
                    <a href="https://drive.google.com/file/d/1Ab91OwlWCUhmhM3g6oMgb8A0S5GdvCCQ/view?usp=sharing">

                        <button className='border border-green  hover:bg-green hover:text-white hover:bg-opacity-80 text-sm p-2 font-bold px-8 py-3 text-green' >RESUME</button>
                    </a>
                </div>
            </div>
            <style jsx>
            {`
                .font{
                    font-size: clamp(40px, 8vw, 80px);
                }

                @media only screen and (max-width: 640px) {
                    .font {
                        font-size:28px;
                    }
                  }
            `}
            </style>
        </div>
    )
}
