import React from 'react';

class Grid extends React.Component{
  render(){
    var alt_text = ''
    return(
      <section className="grid gutter m-y m-lg p-x p-xl">
        <h2 className="display-primary-5 m-y">Featured Shows</h2>
        <div className="row m-l three-up">
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/closeup.jpg')} />
            <h6 className="label-primary-xs m-t m-md">Returns October 6</h6>
            <h4 className="display-primary-2 m-t m-sm">Close Up with the Hollywood Reporter</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/back.jpg')} />
            <h6 className="label-primary-xs m-t m-md">Sunday 8/9c</h6>
            <h4 className="display-primary-2 m-t m-sm">Back</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/groundupthere.jpg')} />
            <h4 className="display-primary-2 m-t m-md">Ground Up There</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/bobnewhartshow.jpg')} />
            <h4 className="display-primary-2 m-t m-md">Bob Newhart Show</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/andygriffithshow.jpg')} />
            <h4 className="display-primary-2 m-t m-md">The Andy Griffith Show</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/lawandorder.jpg')} />
            <h4 className="display-primary-2 m-t m-md">Bob Newhart Show</h4>
          </div>
        </div>
      </section>
    )
  }
}

export default Grid
