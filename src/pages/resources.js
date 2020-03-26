import React from 'react'
import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import amcLogos from '../data/amc-logos.js';


class Resources extends React.Component{
  constructor(){
    super();
    this.state = {
        icons: {iconSet},
        logos: {amcLogos},
    };
  }

  render(){
    let icons = this.state.icons.iconSet
    let logos = this.state.logos.amcLogos
    return(
      <div className='resources m-x'>
        <header className="header-text container-fixed tl p-y">
          <h1 className='display-primary-6 m-y'>Resources</h1>
          <p className='body-lg m-y'>A collection of assets and resources to get you up and running building digital experiences.</p>
        </header>

        <body className="container-fixed">
          <h4 className="display-primary-4 m-t m-lg">Logos</h4>
          <p className="body-md">A set of logos approved for use in AMC digital experiences.</p>
          <ul className="icon-set m-y">
            {logos.map(logo =>
              <li key={logo.slug} className={logo.dark ? "dark " + "tile p-y p-md hidden" : "light " + "tile p-y p-md"}>
                <img className="logo m-y i-xl" src={logo.src} alt={logo.alt} />
                <p className="body-xs p-x tc">{logo.alt} <br></br> {logo.type}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
          <Link to="/downloads/amc-logos.zip" className="button-md button button-light m-y" target="_blank" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all logos"/>
            Download All
          </Link>

          <h4 className="display-primary-4 m-t m-lg">Icons</h4>
          <p className="body-md">We use icons in our experience as recognizable ways to quickly communicate familiar concepts and expected behaviors to our users.</p>
          <ul className="icon-set m-y">
            {icons.map(icon =>
              <li key={icon.slug} className="tile p-y p-md">
                <img className="icon m-y i-xl" src={icon.src} alt={icon.alt} />
                <p className="body-xs">{icon.alt}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
          <Link to="/downloads/icons.zip" className="button-md button button-light m-y" target="_blank" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all icons"/>
            Download All
          </Link>

          <h4 className="display-primary-4 m-t m-lg">Sketch Files</h4>
          <p className="body-md">Download our sketch files to get up and running designing digital experiences for AMC Networks.</p>

          <div className="row three-up m-b m-lg">
            <div className="card m-b m-sm m-r">
              <a href="https://amcnetworks.box.com/shared/static/1ryqj8p5heauaqarrzdhe3a4o1hamyv1.zip" target="_blank" download>
              <img alt="Logos" className="thumbnail" src={require('../img/tiles/sketch-getting-started.png')} />
              </a>
            </div>
            <div className="card m-b m-sm m-r">
              <a href="https://amcnetworks.box.com/shared/static/82nrhrsi9q2605hx86u64u0gczlf4rzq.zip" target="_blank" download>
              <img alt="Logos" className="thumbnail" src={require('../img/tiles/sketch-amc-web.png')} />
              </a>
            </div>
            <div className="card m-b m-sm m-r">
              <a href="https://amcnetworks.box.com/shared/static/gv1mecoodjejnn84nxy1qbwgc1qbfg1j.zip" target="_blank" download>
              <img alt="Logos" className="thumbnail" src={require('../img/tiles/sketch-amc-tv.png')} />
              </a>
            </div>
          </div>

        </body>
      </div>
    )

  }
}

export default Resources;