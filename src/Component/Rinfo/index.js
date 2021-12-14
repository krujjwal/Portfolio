import React from 'react'

export default function Rinfo() {
    return (
        <>
        <div className="rinfo h-auto w-6 mr-10  " >
            <p className="h-56">kkumar.ujjwal125@gmail.com</p>
            <hr className="h-48  w-0.5  bg-green"/>
        </div>
        <style>
            {`
                .rinfo{
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    color:white;
                    display:flex;
                    align-items:center;
                    
                }
            `}
        </style>

                

        </>
    )
}
