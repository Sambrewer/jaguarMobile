import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import BrowseNodeInfo from './BrowseNodeInfo';
import NodeImage from './NodeImage';
import { Card, CardSection } from '../common';

const SQLite = require('react-native-sqlite-storage');

class BrowseNode extends Component {

  state = {
    image_url: ''
  }
  componentWillMount() {
    const imgUrlId = this.props.browseNode.imgUrlId;
    const imgUrlIds = this.props.browseNode.product_list.split('|');
    const db = SQLite.openDatabase({
      name: 'main',
      createFromLocation: '~jaguar.db',
      location: 'Library'
    }, this.openCB, this.errorCB);
    let empty = true;
      for (let i = 0; i < imgUrlIds.length; i++) {
        if (empty) {
        db.transaction((tx) => {
          tx.executeSql(
            `SELECT image_url from amazon_product where asin is '${imgUrlIds[i]}'`,
            [],
            (tx, results) => {

              const image_url = (results.rows.item(0));

              if (image_url !== '' && empty) {
                empty = false;
                this.setState({ image_url: image_url.image_url });
              }
            }
          );
        });
      }
    }
  }


  render() {
    const { nodeHeaderText, imageStyle } = styles;
    const {
      name,
      full_name,
      avg_price,
      avg_revenue,
      avg_review_count,
      max_revenue,
      first_page_space,
      product_list,
      avg_volume
    } = this.props.browseNode;

    return (
      <Card>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={nodeHeaderText}>{name}</Text>
        </CardSection>
        <CardSection>
          <Text style={{ color: '#000', fontSize: 16 }}>{full_name}</Text>
        </CardSection>
        <NodeImage image_url={this.state.image_url} avg_revenue={avg_revenue} />
        <BrowseNodeInfo
          browseNodeInfo={{
            avg_price,
            avg_review_count,
            max_revenue,
            first_page_space,
            product_list,
            avg_volume
          }}
        />
      </Card>
    );
  }
}

const styles = {
  nodeHeaderText: {
    color: 'dodgerblue',
    fontSize: 16
  }
};

export default BrowseNode;
