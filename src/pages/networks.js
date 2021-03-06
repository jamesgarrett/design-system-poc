import React from 'react';
import { NavLink } from 'react-router-dom';

const NetworksPage = () => {
		const alt_text = ''
return (
	  <div className="intro p-x">
	    <section className="m-b tl container-fixed p-y">
	      <h1 className='display-primary-1 m-y'>Typography</h1>
	      <h4 className='display-secondary-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
			</section>
			<section className="m-y container-fixed">
				<div className="row five-up m-b m-lg">
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/amc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc.jpg')} />
						<div className="body-lg m-b tl">AMC Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/sundance'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/sundance.jpg')} />
						<div className="body-lg m-b tl">SundanceTV Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/ifc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/ifc.jpg')} />
						<div className="body-lg m-b tl">IFC Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/bbca'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/bbca.jpg')} />
						<div className="body-lg m-b tl">BBC America Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/wetv'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/wetv.jpg')} />
						<div className="body-lg m-b tl">WEtv Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/twd'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/twdu.jpg')} />
						<div className="body-lg m-b tl">TWD Typography</div>
						</NavLink>
					</div>
				</div>
				</section>
	  </div>
	);
};

export default NetworksPage;
