import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { watchGetMessages, watchMessageSent } from '../../sagas/';

export type AppState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();

export default function() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
        applyMiddleware(sagaMiddleware)
        )
      );
    //   sagaMiddleware.run(watchMessageSent);
    //   sagaMiddleware.run(watchGetMessages);
      return store;
} 