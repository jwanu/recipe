import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';
import * as searchAPI from '../api/autocomplete';

const GET_AUTOCOMPLETE = 'GET_AUTOCOMPLETE';
const GET_AUTOCOMPLETE_SUCCESS = 'GET_AUTOCOMPLETE_SUCCESS';
const GET_AUTOCOMPLETE_ERROR = 'GET_AUTOCOMPLETE_ERROR';

export const getAutocomplete = createPromiseThunk(GET_AUTOCOMPLETE, searchAPI.getAutocomplete);

const initialState = { autocomplete: reducerUtils.initial() };

export default function autocomplete(state = initialState, action) {
  switch (action.type) {
    case GET_AUTOCOMPLETE:
    case GET_AUTOCOMPLETE_SUCCESS:
    case GET_AUTOCOMPLETE_ERROR:
      return handleAsyncActions(GET_AUTOCOMPLETE, 'autocomplete')(state, action);
    default:
        return state;
  }
}
