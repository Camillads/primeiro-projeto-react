import {
    reducer as reduxFormReducer
} from 'redux-form';
import { combineReducers } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
// arquivo que contem todos os reduces necessarios

export default combineReducers({
    form:reduxFormReducer
});