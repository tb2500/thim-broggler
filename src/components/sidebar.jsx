import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Thim Broggler</a></h1>
              <span className="email"><i className="icon-mail"></i>tbroggler@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduktion</a></li>
                  <li><a href="#about" data-nav-section="about">Om Mig</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Tidslinje</a></li>
                  <li><a href="#projects" data-nav-section="projects">Uddannelse</a></li>
                  <li><a href="#blog" data-nav-section="blog">Sprog</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Lavet med <i className="icon-heart" aria-hidden="true" /> og <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Tak <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> til inspiration 
              </small></p>
              <p><small>
                {/* Something coming soon !! */}
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
