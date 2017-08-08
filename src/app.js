import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import BrowseCategories from './components/browseNodes/BrowseCategories';
import { Header } from './components/common';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <View style={style.body}>
        <Header header={'JAGUAR'} />
        <BrowseCategories />
      </View>
    </Provider>
  );
};

const style = {
  body: {
    backgroundColor: 'grey',
    height: '100%'
  }
};

export default App;
