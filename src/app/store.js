import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catReducer from '../reducers/CatSlice';
import rootSaga from '../saga/rootsaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        cat: catReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(rootSaga);

export default store;