import React from "react";
import ReactDom from "react-dom";
import {AppContainer} from 'react-hot-loader';
import App from './components/App'
import {Provider} from 'react-redux';
import store from './redux/store';
renderWithHotReload(App());
if (module.hot) {
  module.hot.accept('./components/App', () => {
      const App = require('./components/App').default;
      renderWithHotReload(App());
  });
}
function renderWithHotReload(RootElement) {
  ReactDom.render(
      <AppContainer>
        <Provider store={store}>
          {RootElement}
          </Provider>
      </AppContainer>,
      document.getElementById('app')
  )
}
// ReactDom.render(
//   <Provider store={store}>
//   <App /></Provider>, document.getElementById('app'));



 