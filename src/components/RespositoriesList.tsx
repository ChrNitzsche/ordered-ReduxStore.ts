import { useState } from "react";

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from "../hooks/useTypedSelector";


const RespositoriesList: React.FC = () => {
   const [term, setTerm] = useState('');
   const { searchRepositories } = useActions();
   const state = useTypedSelector((state) => state.repositories);
   // or destructering ("state." doesn't need to type)
   // const { error, loading, data } = useTypedSelector((state) => state.repositories);

   console.log(state);

   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();    // avoid reload, that means: avoid browser behavior of this event

      searchRepositories(term);
   };
  
   return(
      <div>
         <form onSubmit={onSubmit}>
            <input placeholder="Search npm-package" 
                  onChange={e => setTerm(e.target.value)}/>
            <button>Search </button>
         </form>
         <hr />
         { state.error && <h3>{state.error}</h3>}
         { state.loading && <h3>Loading...</h3>}
         {!state.error && !state.loading && 
            state.data.map((pkg) => <div key={pkg}>{pkg}</div>)
         }
         
      </div>
   )
};

export default RespositoriesList