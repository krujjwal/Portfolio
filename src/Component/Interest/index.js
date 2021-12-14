import React from 'react'

export default function Interest() {
    return (
        <div className="bg-primary">
            <div id="interest">
                <div className='body'>
                    <div>
                        <p className="text-3xl ">Interest</p>
                    </div>
                    <div className='container'>
                        <div className='card'>
                            <div className='imgbox'>
                                <img src="./Assets/dhoni.jpeg"></img>
                            </div>
                            <div className='content'>
                                <h2>CRICKET</h2>
                                <p>No cricket team in the world depends on one or two players. it's always depends on Team Work to win</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imgbox'>
                                <img src="./Assets/cinema.jpeg"></img>
                            </div>
                            <div className='content'>
                                <h2>MOVIES</h2>
                                <p>The average person develops only 10 percent of his mental ability, what will happened if someone unlock 100% mental ability??</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imgbox'>
                                <img src="./Assets/coocking.jpeg"></img>
                            </div>
                            <div className='content'>
                                <h2>COOCKING</h2>
                                <p>A recipe has no soul. You as the cook must bring soul to the recipe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
            {`
                .body{
                    background-color: #0a192f;
                    width: 100%;
                    height: auto;
                    padding-top: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                    font-family: 'Sansita Swashed', cursive;
                    padding-top:180px
                }
                .container{
                    position: relative;
                    width: 90%;
                    height: auto;
                    background-color:#0a192f;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 30px;
                    margin-top: 70px;
                }
                .container .card{
                    position: relative;
                    width: 250px;
                    height: 215px;
                    background: #fff;
                    margin: 30px 10px;
                    padding: 20px 15px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
                    transition: 0.3s ease-in-out;
                }
                .container .card:hover{
                    height: 380px;
                }
                .container .card .imgbox{
                    position: relative;
                    width: 250px;
                    height: 260px;
                    top: -60px;
                    left: 0px;
                    z-index: 1;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
                }
                .container .card .imgbox img{
                    width: 100%;
                    height: 260px;
                    border-radius: 4px;
                }
                .container .card .content{
                   position: relative;
                   margin-top: -140px;
                   padding: 10px 15px;
                   text-align: center;
                   color: #111;
                   visibility: hidden;
                   opacity: 0;
                   transition: 0.3 ease-in-out;
                }
                .container .card:hover .content{
                    visibility: visible;
                    opacity: 1;
                    margin-top: -40px;
                    transition-delay: 0.3s;
                }
                @media only screen and (max-width: 600px){
                    .body{
                        height: auto;
                    }
                    .container{
                        position: relative;
                        width: auto;
                        display: flex;
                        flex-direction: column;
                       justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;
                        padding: 30px;
                        margin-top: 70px;
                    }
                }
                @media only screen and (max-width: 910px){
                    .body{
                        height: auto;
                    }
                    .container{
                        position: relative;
                        width: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        padding: 30px;
                        margin-top: 70px;
                    }
                }
            `}
            </style>

        </div>
        
        
    )}

