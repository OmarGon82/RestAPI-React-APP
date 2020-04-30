import React from 'react';
import {ReactComponent as UnautherizedSVG } from '../svg/unautherized.svg';

export default () => (

  <div className="warning-div">
    <h1>Forbidden: Access Denied </h1>
    <p>It looks like you are trying to edit or delete a course that doesn't belong to you.
      Only the course owner may edit or delete this course.
    </p>
    <UnautherizedSVG />
    <a href='https://dryicons.com/free-icons/no-acccess-icons'> Icon by Dryicons </a>
  </div>
)