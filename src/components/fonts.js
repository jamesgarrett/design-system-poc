import React, {Component} from 'react'
import getBrand from '../functions/getBrand.js'

class Logos extends Component {
	render(){
		let brand = getBrand(this.props.network)
		if (!brand.fonts){
			return <>
				<h4 className="display-primary-4 m-t m-lg">Fonts</h4>
				<span className="body-md">Coming Soon</span>
			</>
		} else {
			return <section className="p-y">
				<h4 className="display-primary-4 m-t m-lg">Fonts</h4>
				<p className="body-md">A set of webfonts approved for use in {this.props.network} digital experiences.</p>
				<ul className="row three-up m-y">
				{brand.fonts.map(font =>
					<li key={font.slug} className="m-b">
						<a href={font.download_link} target="_blank" rel="noopener noreferrer" download>
							<img alt={font.name} className={font.slug} src={font.img} />
						</a>
						<p className="display-primary-2">{font.name}</p>
					</li>
				)}
				</ul>
			</section>
		}
	}
}

export default Logos
