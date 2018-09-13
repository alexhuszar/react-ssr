import update from 'immutability-helper';
import { UPDATE_MY_VAR } from '../constants';

const initialState = () => ({
  myVar: 'Hello World!',
});

export default function (state = initialState, {type}) {
  switch (type) {
    case UPDATE_MY_VAR: {
      return update(getState(), { home: { $set: 'Hello Again World!' } });
    }
    default: {
      return state;
    }
  }
}
