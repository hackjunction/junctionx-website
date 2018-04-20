import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './Partners.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

class Partners extends React.Component {
  componentWillMount() {
    if (this.props.partners.length === 0) this.props.dispatch({ type: 'GET_PARTNERS' });
  }
  render() {
    return (
      <Scroll.Element name="partners">
        <Block className={styles.block}>
          <BlockHeader title="PARTNERS" />
          <Row className="junction_partners" center="xs" middle="xs">
            {this.props.partners.map((partner, i) => (
              <Col xs={6} md={3} key={i}>
                <a href={partner.url}>
                  <img src={partner.logo} className={styles.imgPartner} alt={partner.name} />
                </a>
              </Col>
            ))}
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

function mapStateToProps(state) {
  return {
    partners: state.partners || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

Partners.propTypes = {
  partners: PropTypes.array,
  dispatch: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Partners);
