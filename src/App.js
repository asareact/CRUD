import './App.css';
import './index.css';
import CrudApi from './components/CrudApi';
import { DataProvider } from './context/DataContext';




function App() {
  return (
    <div>
      <DataProvider>
        <CrudApi/>
      </DataProvider>
    </div>
  );
}

export default App;
