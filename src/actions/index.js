import {
  GET_BROWSENODES,
} from './types';

const SQLite = require('react-native-sqlite-storage');


export const getBrowseNodes = () => {
    const browseNodes = [];
    const db = SQLite.openDatabase({
      name: 'main',
      createFromLocation: '~jaguar.db',
      location: 'Library'
    }, this.openCB, this.errorCB);

    return (dispatch) => {
      db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM amazon_browsenode join amazon_search on amazon_browsenode.id = amazon_search.browse_node_id limit 26;',
        [],
        (tx, results) => {
        const len = results.rows.length;
        for (let i = 1; i < len; i++) {
          const row = results.rows.item(i);
          row.imgUrlId = row.product_list.split('|')[0];
          browseNodes.push(row);
          if (i === len - 1) {
            dispatch({ type: GET_BROWSENODES, payload: browseNodes });
          }
        }
      });
    });
  };
};
