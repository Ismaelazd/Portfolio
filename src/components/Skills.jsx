import React , {useState, Component, } from 'react';
import $ from 'jquery/dist/jquery.js'
import 'velocity-animate/velocity';
import { useEffect } from 'react';

const Skills = ()=>{

 
    return(
     <section className="skills">
        <section className="intro">

            <div className="intro-block">
                <div className="centerfold-wrap">
                    <div className="hex-master-wrap">
                            <div className="hover-notify">Hover Me!</div>
                        <div className="grid-1">
                            <div className="hex-wrap backend" data-title="BACKEND" data-content="backend-desc" data-color="#333333">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/3XjDZGJ.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="hex-wrap frontend" data-title="FRONTEND" data-content="frontend-desc" data-color="#16A085">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/f8WewU1.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2">
                            <div className="hex-wrap html" data-title="HTML5" data-content="html-desc" data-color="#E34C26">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/CHmGJ8M.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="hex-wrap css" data-title="CSS3" data-content="css-desc" data-color="#0083de">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/kUSks3I.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="hex-wrap jquery" data-title="JAVASCRIPT" data-content="javascript-desc" data-color="#8cc84b">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/5B9usMm.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-3">
                            <div className="hex-wrap gui" data-title="USER INTERFACE" data-content="gui-desc" data-color="#2C3E52">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/3dXtbto.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="hex-wrap seo" data-title="SEO" data-content="seo-desc" data-color="#C0392B">
                                    <div className="hex-init"></div>
                                    <div className="hex-borders">
                                        <div className="border-1"></div>
                                        <div className="border-2"></div>
                                        <div className="border-3"></div>
                                    </div>
                                    <div className="label"><img src="https://i.imgur.com/FkEYVo6.png"/></div>
                                <div className="hexagon">
                                    <div className="hex-inner-1">
                                        <div className="hex-inner-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="code-display">
                        <div className="code-description">
                            <div className="backend-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>4 Years</p>
                                <p><span>Experience</span>PHP, SQL, NodeJS, Ruby</p>
                                <div className="code-icon"></div>
                            </div>
                            <div className="frontend-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>6 Years</p>
                                <p><span>Experience</span>HTML, CSS, Javascript + Branches</p>
                                <div className="code-icon"></div>
                            </div>
                            <div className="html-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>6 Years</p>
                                <p><span>Experience</span>HTML5 (most recent)</p>
                                <div className="code-icon"></div>
                            </div>
                            <div className="css-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>6 Years</p>
                                <p><span>Experience</span>CSS3 (most recent)</p>
                                <div className="code-icon"></div>
                            </div>
                            <div className="javascript-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>4 Years</p>
                                <p><span>Experience</span>Javascript, Jquery, AngularJS, NodeJS</p>
                                <div className="code-icon"></div>
                            </div>
                            <div className="gui-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>4 Years</p>
                                <p><span>Experience</span>Wordpress, Custom GUI Creation</p>
                                <div className="code-icon"></div>
                            </div>
                            <div className="seo-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>4 Years</p>
                                <p><span>Experience</span>Up-to-date SEO Practices</p>
                                <div className="code-icon"></div>
                            </div>
                  <div className="k-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>4 Years</p>
                                <p><span>Experience</span>Up-to-date SEO Practices</p>
                                <div className="code-icon"></div>
                            </div>
                   <div className="c-desc">
                                <p className="code-title"></p>
                                <p><span>Duration:</span>4 Years</p>
                                <p><span>Experience</span>Up-to-date SEO Practices</p>
                                <div className="code-icon"></div>
                            </div>
                        </div>

                    </div>
                        <div className="hoverblock"></div>
                </div>
            </div>

        </section>
        <script>
        {}
        </script>
     </section>
    )
};
    export default Skills;