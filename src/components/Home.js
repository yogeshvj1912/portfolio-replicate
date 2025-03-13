import React, { useContext } from 'react'
import Icons from './Icons'
import AddContext from '../contextApi/AddContext'



function Home() {
    let contextData= useContext(AddContext)
    return (
        <div className='home-container'>
<Icons/>
           <div className='home-inner-box'>
           <div className='home-names'>
                    <p>Hello!</p>
                    <div className='home-name-tags'><span>I'm </span><h1 id={contextData.lightOn?"border-on":null}>Anish</h1><img src='/images/Wave.png' /></div>
                    <p>UI/UX Designer, Front-End Developer & Thinker.
                      <br />  <span>  Based in India.</span></p>
                </div>
                <div className='home-buttons'>
                        <button style={{ background: "linear-gradient(to right, rgba(223, 88, 12, 1), rgba(253, 153, 61, 1))",
                            boxShadow:contextData.lightOn?"rgba(244, 241, 241, 0.32) 0px 13px 27px -5px, rgba(215, 212, 212, 0.3) 0px 8px 16px -8px":null}} >Download CV</button>
                        <button style={{ background: "linear-gradient(to right, rgba(67, 67, 67, 1), rgba(0, 0, 0, 1))",
                            boxShadow:contextData.lightOn?"rgba(244, 241, 241, 0.32) 0px 13px 27px -5px, rgba(215, 212, 212, 0.3) 0px 8px 16px -8px":null}}>
                                Get in Touch!
                                </button>
                </div>
           </div>
          
            <div className='home-profile'>
                <img className='profile-image' src="/images/Image.png" />
              
            </div>
        </div>
    )
}

export default Home
