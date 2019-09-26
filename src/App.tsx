import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import Form from './components/Form/Form';
import createStore from './redux/store/createStore';

const store = createStore();

const App: React.FC = () => {
  return (
    <div className="App">
        <Provider store={store}>
            <LanguageSwitcher />
            <Form /> 
        </Provider>
    </div>
  );
}

export default App;
