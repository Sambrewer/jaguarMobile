import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection } from './common';

class BrowseNode extends Component {

  render() {
    const { nodeHeaderText, imageStyle } = styles;
    const { name, id, full_name } = this.props.browseNode;
    console.log(this.props.browseNode);
    return (
      <Card>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={nodeHeaderText}>{name}</Text>
          <Text style={nodeHeaderText}>({id})</Text>
        </CardSection>
        <CardSection>
          <Text style={{ color: '#000', fontSize: 16 }}>{full_name}</Text>
        </CardSection>
        <CardSection>
          <Text style={imageStyle}>Image</Text>
        </CardSection>
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
    width: '80%'
  }
};

export default BrowseNode;
