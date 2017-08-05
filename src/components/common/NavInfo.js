import React from 'react';
import { View, Text } from 'react-native';

import { CardSection } from '../common';

const NavInfo = (props) => (
  <CardSection>
    <Text style={styles.textStyle}>{props.pageInfo}</Text>
    <Text>Sort menu</Text>
  </CardSection>
);

const styles = {
  textStyle: {
    color: '#000',
    fontSize: 16
  }
};

export { NavInfo };
