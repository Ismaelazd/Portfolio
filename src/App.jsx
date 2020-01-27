import React , {useState, Fragment} from 'react';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import SavoirEtre from './components/SavoirEtre'


const App = ()=>{

    return(
       <Fragment>
           <Header/>
           <About/>
           <Services/>
           <SavoirEtre/>
       </Fragment>
    )

};
    export default App;