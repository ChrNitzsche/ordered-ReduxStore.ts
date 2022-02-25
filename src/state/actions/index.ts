import { ActionType } from '../action-types';


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

export type Action = SearchRepositoriesAction
            | SearchRepositoriesSuccessAction
            | SearchRepositoriesErrorAction;