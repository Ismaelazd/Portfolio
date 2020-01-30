import React , {useState, Fragment} from 'react';
import { useEffect } from 'react';



const Media = ()=>{

    const [animIcon,setAnimIcon] =useState("invisible")

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 3150){
                setAnimIcon('animated fadeInUp')
            }else{
                setAnimIcon('animated fadeOutDown')
            }
           
        })
        
    })

    return(
        <section className="media">
            <div className="titM text-center">
                <h6>Media</h6>
                <h2>Follow me</h2>
            </div>
            
            <ul className="social-btn">
                <li className={animIcon}>
                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className={animIcon}>
                    <a href="#" className="twitter"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li className={animIcon}>
                    <a href="#" className="twitter"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>
        </section>
       
    )

};
    export default Media;

    