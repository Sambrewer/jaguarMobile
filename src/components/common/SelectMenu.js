import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class SelectMenu extends Component {
  state = {
    selected: 'Sort'
  }

  onSortChange(selected) {
    this.setState({ selected });

    this.props.sortFunc(selected);
  }

  render() {
    const { pickerStyle, itemStyle } = styles;
    return (
      <View>
        <Picker selectedValue={this.state.selected} itemStyle={itemStyle} style={pickerStyle} onValueChange={e => { this.onSortChange(e); }}>
          {this.props.selectOptions.map((option) => <Picker.Item key={option.val} label={option.name} value={option.val} />)}
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
