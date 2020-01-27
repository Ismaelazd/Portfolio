import React , {useState, Fragment} from 'react';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'


const App = ()=>{


    return(
       <Fragment>
           <Header/>
           <About/>
           <Services/>
       </Fragment>
    )
};
    export default App;