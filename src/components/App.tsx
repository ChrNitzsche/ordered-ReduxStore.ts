import { Provider } from 'react-redux'; // React
import { store } from '../state';
import './App.css';
import RespositoriesList from './RespositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for a NPM-Package</h1>
      <RespositoriesList />
    </Provider>
  );
}

export default App;
