import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';

import { getBrowseNodes } from '../../actions';
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
    if (!this.props.loading) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.browseNodes);
    return (
      <View>
        <NavInfo
          pageInfo={`${this.props.browseNodes.length} CATEGORIES`}
          sortParams={[
            { name: 'Avg Revenue', val: 'avg_revenue' },
            { name: 'Price(Asc)', val: 'price(asc)' },
            { name: 'Price(Desc)', val: 'price(desc)' },
            { name: 'Max Revenue', val: 'max_revenue' },
            { name: 'Avg Review(Asc)', val: 'avg_review(asc)' },
            { name: 'Avg Review(Desc)', val: 'avg_review(desc)' }
          ]}
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
    loading: state.browseNodes.loading
  };
};

export default connect(mapStateToProps, { getBrowseNodes })(BrowseCategories);
