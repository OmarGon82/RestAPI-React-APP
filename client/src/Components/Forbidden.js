import React from 'react';

// import svg as a component
import {ReactComponent as UnauthorizedSVG } from '../svg/unauthorized.svg';

export default () => (

  <div className="warning-div">
    <h1>Forbidden: Access Denied </h1>
    <p>It looks like you are trying to edit or delete a course that doesn't belong to you.
      Only the course owner may edit or delete this course.
    </p>
    <UnauthorizedSVG />
    <a href='https://dryicons.com/free-icons/no-acccess-icons'> Icon by Dryicons </a>
  </div>
)