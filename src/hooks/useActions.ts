import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";


// useDispatch gives access to the dispatch()-Function itself
// but that is part of the Redux-Store
// It allows us to dispatch an action into all of our different reducers

export const useActions = () => {
   const dispatch = useDispatch();

   return bindActionCreators(actionCreators, dispatch); 
   // returns somethink like: { searchRespositories: dispatch(searchRespositories()) }

}
