import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import BrowseCategories from './components/BrowseCategories';
import { Header } from './components/common';

const App = () => (
    <Provider store={createStore(reducers)}>
      <View style={style.body}>
        <Header header={'JAGUAR'} />
        <BrowseCategories />
      </View>
    </Provider>
  );

const style = {
  body: {
    backgroundColor: 'grey',
    height: '100%'
  }
};

export default App;
