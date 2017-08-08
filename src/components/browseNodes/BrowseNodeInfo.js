import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CardSection } from '../common';

class BrowseNodeInfo extends Component {

    countProducts(product_list) {
      return product_list.split('|').length;
    }

    render() {
      const {
        avg_price,
        avg_review_count,
        max_revenue,
        first_page_space,
        product_list,
        avg_volume } = this.props.browseNodeInfo;
      const { viewStyle, infoText } = styles;

    return (
      <CardSection>
        <View style={viewStyle}>
          <Text style={infoText}>{this.countProducts(product_list)}</Text>
          <Text style={infoText}># Products</Text>
          <Text style={infoText}>{avg_price}</Text>
          <Text style={infoText}>Avg Price/Unit</Text>
          <Text style={infoText}>{avg_volume}</Text>
          <Text style={infoText}>Avg Sold/Month</Text>
        </View>
        <View style={viewStyle}>
          <Text style={infoText}>{first_page_space}</Text>
          <Text style={infoText}>1st Page Space</Text>
          <Text style={infoText}>{avg_review_count}</Text>
          <Text style={infoText}>Avg Review Count</Text>
          <Text style={infoText}>{max_revenue}</Text>
          <Text style={infoText}>Avg Sold/Month</Text>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    height: 175
  },
  infoText: {
    color: '#000',
    fontSize: 14
  }
};

export default BrowseNodeInfo;
