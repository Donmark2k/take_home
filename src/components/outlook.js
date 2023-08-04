import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Outlook = () => (
  <div className="container">
    <div className="first_block">
      <p> COURSE</p>
      <h2>
        {' '}
        JavaScript
        <br />
        Fundamentals
      </h2>
      <p> View all chapters ></p>
    </div>
    <div className="second_block">
      <div className="first_row">
        <p>CHAPTER 4</p>
        <div>
          <ProgressBar now={60} className="progress-line" />
          <p className="progress-p"> 6/9 Challenges</p>

        </div>

      </div>
      <h2>Callbacks & Closures</h2>
      <button type="button">Continue</button>

    </div>
  </div>
);

export default Outlook;
