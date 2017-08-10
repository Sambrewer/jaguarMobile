import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { getNodeImage } from '../../actions';
import BrowseNodeInfo from './BrowseNodeInfo';
import NodeImage from './NodeImage';
import { Card, CardSection } from '../common';


class BrowseNode extends Component {
  state = {

  }


  renderImage(image_url, avg_revenue) {
    if (image_url !== '') {
      return (
        <NodeImage image_url={image_url} avg_revenue={avg_revenue} />
      );
    }
    return <NodeImage image_url={null} avg_revenue={avg_revenue} />;
  }

  render() {
    const {
      image_url,
      name,
      full_name,
      avg_price,
      avg_revenue,
      avg_review_count,
      max_revenue,
      first_page_space,
      product_list,
      avg_volume
    } = this.props.browseNode;

    return (
      <Card>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={styles.nodeHeaderText}>{name}</Text>
        </CardSection>
        <CardSection>
          <Text style={{ color: '#000', fontSize: 16 }}>{full_name}</Text>
        </CardSection>
        {this.renderImage(image_url, avg_revenue)}
        <BrowseNodeInfo
          browseNodeInfo={{
            avg_price,
            avg_review_count,
            max_revenue,
            first_page_space,
            product_list,
            avg_volume
          }}
        />
      </Card>
    );
  }
}

const styles = {
  nodeHeaderText: {
    color: 'dodgerblue',
    fontSize: 16
  }
};


export default connect(null, { getNodeImage })(BrowseNode);
