import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Partners.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

const Partners = () => (
  <Scroll.Element name="partners">
    <Block className={styles.block}>
      <BlockHeader title="PARTNER WITH US"/>
      <Row className="junction_partners" center="xs">
        <Col xs={6} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/elisa.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/veikkaus.png"
            className="responsive"
            alt=""
          />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Partners;
