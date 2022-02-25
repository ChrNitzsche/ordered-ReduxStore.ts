import { ActionType } from '../action-types';
import { Action } from '../actions';


interface RepositoriesState {
   loading: boolean;
   error: string | null | undefined;
   data: string[];
}

const initalState = {
   loading: false,
   error: null,
   data: []
};

/* Export into actions/index.ts

      interface SearchRepositoriesAction {
         // type: 'search_respositories';
            type: ActionType.SEARCH_REPOSITORIES;
      }

      interface SearchRepositoriesSuccessAction {
         // type: 'search_respositories_success';
         type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
         payload: string[];
      }

      interface SearchRepositoriesErrorAction {
         // type: 'search_respositories_error';
         type: ActionType.SEARCH_REPOSITORIES_ERROR;
         payload?: string;
      }

      type Action = SearchRepositoriesAction
                  | SearchRepositoriesSuccessAction
                  | SearchRepositoriesErrorAction;
*/


/* Export into action-types/index.ts

      enum ActionType {
         SEARCH_REPOSITORIES = 'SearchRepositoriesAction',
         SEARCH_REPOSITORIES_SUCCESS = 'SearchRepositoriesSuccessAction',
         SEARCH_REPOSITORIES_ERROR = 'SearchRepositoriesErrorAction'            
      }
      Now, IntelliSense Autocompletion is ready: ActionType.
*/




const reducer = ( state: RepositoriesState = initalState, action: Action): RepositoriesState => {
   
   // if (action.type === "search_repositories_success") {
   if (action.type === ActionType.SEARCH_REPOSITORIES_SUCCESS) {
      /* No we have a 100% certainty, that 'action' satisfies the SearchRepositoriesSuccessAction interface */
      /* because the type 'search_repositories_success' is only of that interface */

      // Mouse over: action.payload -> we will see...
      // action.payload = []; 
   }
  
   switch(action.type) {
   
      // case 'search_repositories':
         case ActionType.SEARCH_REPOSITORIES:
               return { loading: true, error: null, data: [] };
   
      // case 'search_repositories_success':
         case ActionType.SEARCH_REPOSITORIES_SUCCESS:
               return { loading: false, error: null, data: action.payload };

      // case 'search_repositories_error':
         case ActionType.SEARCH_REPOSITORIES_ERROR:
               return { loading: false, error: action.payload, data: [] };
               
      default: return state;
   }
}

export default reducer;