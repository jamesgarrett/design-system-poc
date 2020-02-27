import React from 'react'
import { NavLink, Route } from 'react-router-dom';

class Sidenav extends React.Component{
	render(){
		return(  
		<div className="container-fixed">  
	      <div>
              <ul className="side-nav m-v">
	            <li className="button m-r">Networks</li>
                <li><NavLink className="button" to='/typography/amc' >AMC</NavLink></li>
                <li><NavLink className="button" to='/typography/sundance'>Sundance TV</NavLink></li>
              </ul>
          </div>

	    </div>
		)
	}
	
}

export default Sidenav;