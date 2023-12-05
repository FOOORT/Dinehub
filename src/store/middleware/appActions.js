import {appActionCallBegan, appActionCallSuccess} from '../appActions';

const appActions = ({dispatch}) => {
    return (next) => (action) => {
        if (action.type === appActionCallBegan.type) {
            const {onStart, data, onSuccess} = action.payload;
            if (onStart) dispatch({type: onStart});
            next(action);
            dispatch(appActionCallSuccess(data));
            dispatch({type: onSuccess, payload: data});
        } else {
            next(action);
        }
    };
};

export default appActions;
