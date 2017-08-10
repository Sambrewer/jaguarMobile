import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const Header = (props) => {
  const { headerText, headerStyle, headerNav, headerSearch } = styles;

  return (
    <View style={headerStyle}>
      <View style={headerNav}>
        <TouchableWithoutFeedback>
          <FontAwesome>
            <Text style={headerText}>{Icons.bars}</Text>
          </FontAwesome>
        </TouchableWithoutFeedback>
        <Text style={headerText}>{props.header}</Text>
      </View>
      <View style={headerSearch}>
        <TouchableWithoutFeedback>
          <FontAwesome>
            <Text style={headerText}>{Icons.search}</Text>
          </FontAwesome>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: '#1E90FF',
    height: 40,
    flexDirection: 'row',
    paddingRight: 10
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  headerNav: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  headerSearch: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

export { Header };
