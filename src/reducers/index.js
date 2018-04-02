/**
 * Created by kk on 2018/4/2.
 */
import {combineReducers} from 'redux';

import list from './list';
import user from './user';
import details from './details';
let Reducer = combineReducers({
    list,
    details,
    user
});

export default Reducer;