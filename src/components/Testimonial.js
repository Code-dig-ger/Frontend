import React from 'react'
import './Testimonial.css'


function Testimonial() {
    
    return (
        <>
                                <div className="main-gallery">
                    <div className="gallery-cell">
                        <div className="testimonial">
                            <img className="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
                        <q className="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae rutrum nulla."</q>
                        <span className="testimonial-author">Joe Smith, CEO of Cubix</span>
                        </div>
                    </div>
                    <div className="gallery-cell">
                        <div className="testimonial">
                            <img className="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/chexee/128.jpg"/>
                        <q className="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae rutrum nulla."</q>
                        <span className="testimonial-author">Lisa Jones, Freelance Web Developer</span>
                        </div>
                    </div>
                    <div className="gallery-cell">
                            <div className="testimonial">
                            <img className="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/andretacuyan/128.jpg"/>
                        <q className="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae rutrum nulla."</q>
                        <span className="testimonial-author">Ryan Waltz, Front-End Developer</span>
                        </div>
                    </div>
                    </div>

        </>
    )
}

export default Testimonial;
