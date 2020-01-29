import React , {useState, Fragment} from 'react';
import Media from './Media'
import Formulaire from './Formulaire'
import { useEffect } from 'react';


const Contact = ()=>{

    const [isMobile, setIsMobile] = useState('false');

    useEffect(()=>{
        if(window.screen.width <= 375){
            setIsMobile('true')
        }else{
            setIsMobile('false')
        }
    })

    return(

        <section className="conInfo container ">
            <div className="row  ">
                <div className={isMobile ? "col-md-6 meme bordTop ":"col-md-6 meme bordSide" }>
                    <Media/>
                </div>
                <div className="col-md-6 ">
                    <Formulaire/>
                </div>
            </div>

        </section>
        
    )

};
export default Contact;

    