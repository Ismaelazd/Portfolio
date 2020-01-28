import React , {useState, Fragment} from 'react';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import SavoirEtre from './components/SavoirEtre'
import Skills from './components/Skills'


const App = ()=>{

    return(
       <Fragment>
           <Header/>
           <About/>
           <Services/>
           <SavoirEtre/>
           <Skills/>
       </Fragment>
    )

};
    export default App;

    