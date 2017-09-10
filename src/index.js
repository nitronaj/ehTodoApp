import React from 'react';
import ReactDom from 'react-dom';
import store from './reducers/store';
import App from './components/App';

const render = () => {
  ReactDom.render(
    <App
      {...store.getState()}
      store={store}
    />,
    document.getElementById('root')
  )
};

store.subscribe(render);
render();
// render(<App />, document.getElementById('root'));

