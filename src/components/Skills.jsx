import React , {useState, Component, Fragment, } from 'react';


import { useEffect } from 'react';

const Skills = ()=>{

 
    return(
        
    <Fragment>
      <h2 className="my-5 text-center" >Mes Compétences</h2>
       <div className="skills">

  <div className="charts">
    <div className="chart chart--dev">
      <span className="chart__title">Development</span>
      <ul className="chart--horiz">
        <li className="chart__bar" id='html'    >
          <span className="chart__label">
            HTML5
          </span>
        </li>
        <li className="chart__bar" id='css'     >
          <span className="chart__label">
            CSS3 & SCSS
          </span>
        </li>
        <li className="chart__bar" id="js"      >
          <span className="chart__label">
            JavaScript
          </span>
        </li>
        <li className="chart__bar" id="AngularJs"   >
          <span className="chart__label">
            AngularJS
          </span>
        </li>
        <li className="chart__bar" id="ReactJS"     >
          <span className="chart__label">
            ReactJS
          </span>
        </li>
        <li className="chart__bar" id="jquery"      >
          <span className="chart__label">
            jQuery
          </span>
        </li>
        <li className="chart__bar" id="nodejs"      >
          <span className="chart__label">
            NodeJS
          </span>
        </li>
        <li className="chart__bar" id="grunt"   >
          <span className="chart__label">
            Grunt / Gulp / Webpack
          </span>
        </li>
        <li className="chart__bar" id="net"     >
          <span className="chart__label">
            .NET
          </span>
        </li>
        <li className="chart__bar" id="umbraco"     >
          <span className="chart__label">
            Umbraco
          </span>
        </li>
        <li className="chart__bar" id="sitecore"    >
          <span className="chart__label">
            Sitecore
          </span>
        </li>
      </ul>
    </div>
    
    <div className="chart chart--prod">
      <span className="chart__title">Productivity</span>
      <ul className="chart--horiz">
      <li className="chart__bar" id="git"   >
        <span className="chart__label">
          Git + Github, Bitbucket & Sourcetree
        </span>
      </li>
      <li className="chart__bar" id="microsoft"     >
        <span className="chart__label">
          Microsoft Office
        </span>
      </li>
    </ul>
    </div>
    
    <div className="chart chart--design">
      <span className="chart__title">Design</span>
      <ul className="chart--horiz">
      <li className="chart__bar" id="ph"    >
        <span className="chart__label">
          Photoshop
        </span>
      </li>
      <li className="chart__bar" id="illu"      >
        <span className="chart__label">
          Illustrator
        </span>
      </li>
      <li className="chart__bar" id="ue"    >
        <span className="chart__label">
          User Experience
        </span>
      </li>
    </ul>
    </div>
  </div>

</div>

   
   
    </Fragment>

    )
};
    export default Skills;