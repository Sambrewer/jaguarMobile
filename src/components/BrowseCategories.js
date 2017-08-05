import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import BrowseNode from './BrowseNode';
import { Spinner } from './common';

const SQLite = require('react-native-sqlite-storage');

class BrowseCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      browseNodes: []
    };
  }

  componentWillMount() {
    const browseNodes = [];
    const db = SQLite.openDatabase({
      name: 'main',
      createFromLocation: '~jaguar.db',
      location: 'Library'
    }, this.openCB, this.errorCB);

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM amazon_browsenode limit 26',
        [],
        (tx, results) => {
        const len = results.rows.length;
        for (let i = 1; i < len; i++) {
          const row = results.rows.item(i);
          browseNodes.push(row);
        }
        this.setState({ browseNodes });
      });
    });
  }

  renderList() {
    return this.state.browseNodes.map(browseNode =>
      <BrowseNode key={browseNode.id} browseNode={browseNode} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { browseNodes: state.browseNodes };
};

export default connect(mapStateToProps)(BrowseCategories);
