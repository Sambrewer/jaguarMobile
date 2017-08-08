import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class SelectMenu extends Component {
  state = {
    selected: 'Sort'
  }

  render() {
    const { pickerStyle, itemStyle } = styles;
    console.log(this.props.selectOptions);
    return (
      <View>
        <Picker selectedValue={this.state.selected} itemStyle={itemStyle} style={pickerStyle} onValueChange={(val) => this.setState({ selected: val })}>
          {this.props.selectOptions.map((option) => <Picker.Item key={option.val} label={option.name} value={option.name} />)}
        </Picker>
      </View>
    );
  }
}
const styles = {
  pickerStyle: {
    height: 20,
    width: 135
  },
  itemStyle: {
    fontSize: 14,
    color: '#000'
  }
};

export { SelectMenu };
