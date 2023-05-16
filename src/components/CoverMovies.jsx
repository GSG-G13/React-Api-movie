import React from 'react';
import Firefly from '../images/Firefly.jpg'

class  CoverMovies  extends React.Component {
render() {

  return (
    <section id="intro">
      <div id="img-container">
        <img className='cover-img' src={Firefly} alt="bgggg" />
      </div>
    </section>
  );

};
}

export default CoverMovies;