import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf card text-center">
      <div className="card-header">
        <h3>{props.name}</h3>
      </div>
      <div className="card-body">
        <strong className="card-text">{props.height} tall</strong>
        <p className="card-text">{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

