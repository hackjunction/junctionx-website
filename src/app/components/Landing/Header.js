import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Block from '../viewBlocks/Block';
import styles from './Header.c.scss';

const Header = props => (
  <Block className={styles.block}>
    <Row center="xs">
      <Col xs={12} sm={8}>
        <img src="/images/JUNCTIONx_logos-wordmark-white.png" alt="" className={styles.pic} />
      </Col>
    </Row>
    <Row center="xs">
      <Col xs={12} sm={8}>
        <p className={styles.name}>{props.name && props.name.toUpperCase()}</p>
      </Col>
    </Row>
  </Block>
);

Header.propTypes = {
  name: PropTypes.string
};

export default Header;
