import React , {useState, Fragment} from 'react';



const Media = ()=>{

    return(
        <section className="media">
            <div className="titM text-center">
                <h6>Media</h6>
                <h2>Follow me</h2>
            </div>
            
            <ul className="social-btn">
                <li className="">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className="">
                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                </li>
                <li className="">
                    <a href="#" className="twitter"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>
        </section>
       
    )

};
    export default Media;

    