import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <h2 className={classes.title}>{props.children}</h2>
  )
}

export default Header;