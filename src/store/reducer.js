import {combineReducers} from 'redux';
import authReducer from './auth';
import menuReducer from './restaurant/menu'
import restaurantReducer from './restaurant/restaurant';

export default combineReducers({
    auth: authReducer,
    menu: menuReducer,
    restaurant: restaurantReducer
});
