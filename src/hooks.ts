import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionsCreators from 'src/store/actionCreators'
import {RootState} from "src/store/store";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreators, dispatch);
}

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;