import { Reducer, Action, createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import { useDispatch as _useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { HYDRATE, MakeStore, createWrapper } from 'next-redux-wrapper';

export const initialState: GlobalState = {
  identity: {}
};

interface GlobalState {
  identity: object;
};

export type ActionWithPayload<T, P> = Action<T> & { payload: P };

export type ReduxAction =
  | Action<AnyAction>
  | ActionWithPayload<typeof HYDRATE, GlobalState>;

const reducer: Reducer<GlobalState, ReduxAction> = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof configureStore>;

const rootReducer = combineReducers({
  common: reducer
});

export const configureStore = () => createStore(rootReducer, composeWithDevTools());
const makeStore: MakeStore<Store> = configureStore;

export const wrapper = createWrapper(makeStore, { debug: false });

export default makeStore;