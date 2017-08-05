const SQLite = require('react-native-sqlite-storage');

export default (state = null, action) => {
  const browseNodes = [];
  const db = SQLite.openDatabase({
    name: 'main',
    createFromLocation: '~jaguar.db',
    location: 'Library'
  }, this.openCB, this.errorCB);

  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM amazon_browsenode limit 25;',
      [],
      (tx, results) => {
      const len = results.rows.length;
      for (let i = 0; i < len; i++) {
        const row = results.rows.item(i);
        browseNodes.push(row);
      }
    });
  });
  return browseNodes;
};
