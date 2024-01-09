import './Markdown-Previewer.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import{createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { markdownReducer, htmlReducer } from './Reducers';
import MarkdownInput from './MarkdownInput'
import HtmlOutput from './HTMLOutput.js';

function App() {
  return (
    <Provider store={store}> 
      <div className="container mt-5">
        <div className="row">
          <MarkdownInput />
          <HtmlOutput />
        </div>
      </div>
    </Provider>
  );
}

const rootReducer = combineReducers({
  markdown: markdownReducer,
  html: htmlReducer,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, enhancer);

export default App;