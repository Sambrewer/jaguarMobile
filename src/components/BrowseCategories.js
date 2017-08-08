import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import { getBrowseNodes } from '../actions';
import BrowseNode from './BrowseNode';
import { Spinner } from './common';

class BrowseCategories extends Component {
  componentWillMount() {
    this.props.getBrowseNodes();


  }

  renderRow(node) {
    return <BrowseNode browseNode={node} />
  }

  render() {
    if (!this.props.loading) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.browseNodes);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
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
