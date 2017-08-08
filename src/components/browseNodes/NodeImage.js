import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { CardSection } from '../common';

class NodeImage extends Component {

  renderImageSection() {
    const { imageStyle } = styles;
    if (this.props.image_url !== '') {
        return (
        <Image style={imageStyle} source={{ uri: this.props.image_url }} />
      );
    }
    return (
      <View style={imageStyle}>
        <Text>No Image</Text>
      </View>
    )
  }

  render() {
    const {
      imageStyle,
      imageWrapper,
      footerStyle,
      textInfo,
      textContent
    } = styles;
    return (
      <CardSection>
        <View style={imageWrapper}>
          {this.renderImageSection()}
          <View style={footerStyle}>
            <Text style={textInfo}>Avg Revenue/Month</Text>
            <Text style={textContent}>{this.props.avg_revenue}</Text>
          </View>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  imageWrapper: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 200,
    width: '80%',
    marginBottom: 15
  },
  textInfo: {
    color: '#000',
    fontSize: 14
  },
  textContent: {
    color: '#000',
    fontSize: 20
  }
};

export default NodeImage;
