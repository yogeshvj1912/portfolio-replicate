import React, { useContext } from 'react'
import Icons from './Icons'
import AddContext from '../contextApi/AddContext'

function About() {
    let contextData = useContext(AddContext)
    return (
        <div className='about-container'>
            <img className="image-vector1" src="/images/Vector 1.png" alt="Vector 1" />
            <img className="image-vector4" src="/images/Vector 4.png" alt="Vector 4" />
            <img className="image-vector5" src="/images/Vector 5.png" alt="Vector 5" />
            <img className="image-rectangle" src="/images/Rectangle.png" alt="Rectangle" />
            <Icons />
            <div className='about '>
                <div className='about-heading'>
                    <p style={{ fontSize: "30px", fontWeight: "500" }}>
                        <span style={{ fontSize: "55px", fontWeight: "500" }}>T</span>his is it. ;)
                    </p>
                    <div id={contextData.lightOn?"border-on":null}></div>
                </div>
                <p>Anish Kr. Sinha is an Indian <span style={{ fontWeight: "400" }}>UI/UX Designer & Front End Developer</span> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. </p>
                <p>He holds a <span style={{ fontWeight: "400" }}>bachelor degree in Computer Applications.</span> During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, <span style={{ fontWeight: "400" }}>India.</span> Where he’s working as an independent creative. </p>
                <p style={{ margin: "20px 0" }}>His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <span style={{ fontWeight: "400" }}>3D floor plan.</span></p>
                <p>When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
                <div id={contextData.lightOn?"border-on":null}></div>
            </div>
            <div className='image-vector3'><img src="/images/Vector 3.png " alt="" /></div>

        </div>
    )
}

export default About
