import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';

const Welcome = props => (
  <Scroll.Element name="welcome">
    <Block contentClassName={styles.blockContent}>
      <Row className="junction_welcome" middle="xs" center="xs">
        <Col xs={12} md={4} className={styles.welcome}>
          <img src="/images/junctionx_globe.png" alt="" className={styles.welcomeImage} />
        </Col>
        <Col xs={12} md={6} first="md" className="start-md">
          <h1>A HACKATHON EXPERIENCE LIKE NO OTHER</h1>
          <p>
            JunctionX is a converging point for developers, designers and entrepreneurs from around the world<br />
            <br />Born and raised in Helsinki, Finland, JunctionX brings...
          </p>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Welcome;
