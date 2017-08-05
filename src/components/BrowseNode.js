import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection } from './common';

class BrowseNode extends Component {
  render() {
    const { nodeHeaderText } = styles;
    const { name, id, full_name } = this.props.browseNode;
    return (
      <Card>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={nodeHeaderText}>{name}</Text>
          <Text style={nodeHeaderText}>({id})</Text>
        </CardSection>
        <CardSection>
          <Text>{full_name}</Text>
        </CardSection>
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

export default BrowseNode;
