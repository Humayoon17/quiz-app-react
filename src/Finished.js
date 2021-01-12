import React from 'react';

const Finished = ({ resetApp }) => {
  return (
    <div className='finished'>
      <div>
        <h1>Congurations!</h1>
        <h4>You Completed Successfully!</h4>
        <div onClick={resetApp} className='btn-reset'>
          Reset App
        </div>
      </div>
    </div>
  );
};

export default Finished;
