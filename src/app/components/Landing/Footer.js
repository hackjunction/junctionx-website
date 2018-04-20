import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Block from '../viewBlocks/Block';
import styles from './Footer.c.scss';

const Footer = props => (
  <Block className={styles.block} contentClassName={styles.blockContent} noSeparator>
    <Row center="xs">
      <Col xs={12} md={4}>
        {props.email && <h3>CONTACT:</h3>}
        <p>{props.email}</p>
        <a className={styles.a} href="https://www.hackjunction.com/">
          JUNCTION
        </a>
      </Col>
    </Row>
  </Block>
);
Footer.propTypes = {
  email: PropTypes.string
};

export default Footer;
