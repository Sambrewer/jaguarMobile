import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

import { CardSection, SelectMenu } from '../common';

class NavInfo extends Component {


  render() {
    console.log(this.props);
    return (
      <CardSection>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{this.props.pageInfo}</Text>
          <SelectMenu selectOptions={this.props.sortParams} />  
        </View>
      </CardSection>
    );
  }
}

const styles = {
  textStyle: {
    color: '#000',
    fontSize: 16
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  }
};

export { NavInfo };
