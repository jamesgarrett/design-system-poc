import React from 'react'
import SundanceTypeStyles from '../data/typeStyles/sundance.js'

class SundanceType extends React.Component{
  constructor(props){
    super();
    this.state = {SundanceTypeStyles};
  }

	render(){
    let typeStyles = this.state.SundanceTypeStyles
    console.log({typeStyles});
		return(

			<ul className="typography col-12 m-y">
        <li className="row m-x">
          <span className="label-secondary p-x p-y">Class</span>
          <span className="label-secondary p-x p-y">Font Family</span>
          <span className="label-secondary p-x p-y">Size</span>
          <span className="label-secondary p-x p-y">Case</span>
          <span className="label-secondary p-x p-y">Line Height</span>
          <span className="label-secondary p-x p-y">Font Weight</span>
          <span className="label-secondary p-x p-y">Letter Spacing</span>
        </li>
        {typeStyles.map(typeStyle =>
          <li key={typeStyle.name} className="row m-x">
            <span className={`${typeStyle.name} p-x p-y`}>{typeStyle.name}</span>
            <span className="body-md p-x p-y">{typeStyle.font.postscriptName}</span>
            <span className="body-md p-x p-y">{typeStyle.font.size}</span>
            <span className="body-md p-x p-y">{typeStyle.textTransform}</span>
            <span className="body-md p-x p-y">{typeStyle.lineHeight}</span>
            <span className="body-md p-x p-y">{typeStyle.font.weight}</span>
            <span className="body-md p-x p-y">{typeStyle.font.stretch}</span>
          </li>
        )}
      </ul>
		)
	}

}

export default SundanceType;
