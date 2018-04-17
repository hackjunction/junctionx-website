import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Block from '../viewBlocks/Block';
import styles from './Footer.c.scss';
import PropTypes from 'prop-types';

const Footer = props => (
  <Block className={styles.block} contentClassName={styles.blockContent} noSeparator>
    <Row center="xs">
      <Col xs={12} md={4}>
        <h3>CONTACT:</h3>
        <p>{props.email}</p>
      </Col>
    </Row>
  </Block>
);

export default Footer;
