import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getBrowseNodes } from '../actions';
import BrowseNode from './BrowseNode';
import { Spinner } from './common';

class BrowseCategories extends Component {
  componentWillMount() {
    this.props.getBrowseNodes();
  }

  renderRows() {
      if (!this.props.loading) {
      return this.props.browseNodes.map(browseNode =>
          <BrowseNode key={browseNode.id} browseNode={browseNode} />
      );
    }
    return <Spinner size='large' />;
  }

  render() {
    return (
      <ScrollView>
        {this.renderRows()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    browseNodes: state.browseNodes.browseNodes,
    loading: state.browseNodes.loading
  };
};

export default connect(mapStateToProps, { getBrowseNodes })(BrowseCategories);
