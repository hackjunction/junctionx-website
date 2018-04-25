import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNav.c.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div className={styles.header_wrapper}>
        <header className={styles.header}>
          <Link to="/">
            <img
              className={styles.junction_logo}
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
              alt="Logo"
            />
          </Link>
        </header>
      </div>
    );
  }
}

export default TopNav;
