import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
//import { Context } from '../../context/Context'

const Main = () => {

    //const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            
            <div className="greet">
                <p><span>Hello, Rijul.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest famous historical sites to visit on an upcoming trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: Automation using AI</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Give me tips to grow my business </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
            </div>

            
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main