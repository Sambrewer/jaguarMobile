import {
  GET_BROWSENODES,
  SORT_CARDS,
  GET_IMAGE
} from './types';

const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({
  name: 'main',
  createFromLocation: '~jaguar.db',
  location: 'Library'
}, this.openCB, this.errorCB);

export const getBrowseNodes = () => {
    const browseNodes = [];

    return (dispatch) => {
      db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM amazon_browsenode JOIN amazon_search ON amazon_browsenode.id = amazon_search.browse_node_id LIMIT 100;',
        [],
        (tx, results) => {
        const len = results.rows.length;
        for (let i = 1; i < len; i++) {
          const row = results.rows.item(i);
          const imgId = row.product_list.split('|')[0];
          tx.executeSql(
            `SELECT image_url FROM amazon_product WHERE asin IS '${imgId}'`,
            [],
            (tx, results) => {
              const image_url = results.rows.item(0);
              const node = Object.assign(row, image_url);
              browseNodes.push(node);
              if (browseNodes.length === len - 1) {
                dispatch({ type: GET_BROWSENODES, payload: browseNodes });
              }
            }
          );
        }
      });
    });
  };
};

export const sortCards = (params) => {
  const browseNodes = [];

  return (dispatch) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM amazon_browsenode JOIN amazon_search ON amazon_browsenode.id = amazon_search.browse_node_id ORDER BY amazon_search.${params} LIMIT 100;`,
        [],
        (tx, results) => {
          const len = results.rows.length;
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            const imgId = row.product_list.split('|')[0];
            tx.executeSql(
              `SELECT image_url FROM amazon_product WHERE asin IS '${imgId}'`,
              [],
              (tx, results) => {
                const image_url = results.rows.item(0);
                const node = Object.assign(row, image_url);
                browseNodes.push(node);
                if (browseNodes.length === len - 1) {
                  dispatch({ type: SORT_CARDS, payload: browseNodes });
                }
              }
            );
          }
        }
      );
    });
  };
};
