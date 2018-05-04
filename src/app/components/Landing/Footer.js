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
        {props.external && (
          <a className={styles.a} href={props.external_url}>
            {props.external}
          </a>
        )}
        <a className={styles.a} href="https://www.hackjunction.com/">
          JUNCTION
        </a>
      </Col>
    </Row>
  </Block>
);
Footer.propTypes = {
  email: PropTypes.string,
  external: PropTypes.string,
  external_url: PropTypes.string
};

export default Footer;
