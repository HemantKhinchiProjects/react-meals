import React, { Fragment } from 'react';
import classes from './Header.module.css';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>Image will come here</div>
    </Fragment>
  );
};
export default Header;
