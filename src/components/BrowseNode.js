import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BrowseNodeInfo from './BrowseNodeInfo';
import { Card, CardSection } from './common';

class BrowseNode extends Component {

  render() {
    const { nodeHeaderText, imageStyle } = styles;
    const {
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
          <Text style={nodeHeaderText}>{name}</Text>
        </CardSection>
        <CardSection>
          <Text style={{ color: '#000', fontSize: 16 }}>{full_name}</Text>
        </CardSection>
        <CardSection>
          <Text style={imageStyle}>Image</Text>
          <View>
            <Text>Avg Revenue/Month</Text>
            <Text>{avg_revenue}</Text>
          </View>
        </CardSection>
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
  },
  imageStyle: {
    height: 150,
    flex: 1
  }
};

export default BrowseNode;
