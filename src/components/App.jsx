import React from 'react';
import './App.scss';
import store from '../reducers/store';
import Counter from './Counter';
import { Provider } from 'react-redux';

const App = () => {

    return (
        <Provider store={store}>
            <div className='app'>
                <Counter/>
            </div>
        </Provider>
    );
};

export default App;