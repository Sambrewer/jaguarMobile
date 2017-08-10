import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';

import { getBrowseNodes, sortCards } from '../../actions';
import BrowseNode from './BrowseNode';
import { Spinner, NavInfo } from '../common';

class BrowseCategories extends Component {
  componentWillMount() {
    this.props.getBrowseNodes();
  }

  renderRow(node) {
    return <BrowseNode browseNode={node} />;
  }

  render() {
    const sortParams = [
      { name: 'Avg Revenue', val: 'avg_revenue DESC' },
      { name: 'Price(Asc)', val: 'avg_price ASC' },
      { name: 'Price(Desc)', val: 'avg_price DESC' },
      { name: 'Max Revenue', val: 'max_revenue DESC' },
      { name: 'Avg Review(Asc)', val: 'avg_review ASC' },
      { name: 'Avg Review(Desc)', val: 'avg_review DESC' }
    ];
    const count = this.props.browseNodes.length;

    if (!this.props.loading) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.browseNodes);
    return (
      <View>
        <NavInfo
          pageInfo={`${count} Categories`}
          sortParams={sortParams}
          sortFunc={this.props.sortCards}
        />
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
  return <Spinner size='large' />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    browseNodes: state.browseNodes.browseNodes,
    loading: state.browseNodes.loading,
  };
};

export default connect(mapStateToProps, { getBrowseNodes, sortCards })(BrowseCategories);
