import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CardSection, SelectMenu } from '../common';

class NavInfo extends Component {


  render() {
    console.log(this.props);
    const { pageInfo, sortFunc, sortParams } = this.props;
    return (
      <CardSection>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{pageInfo}</Text>
          <SelectMenu
            sortFunc={sortFunc}
            selectOptions={sortParams}
          />
        </View>
      </CardSection>
    );
  }
}

const styles = {
  textStyle: {
    color: '#666',
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
