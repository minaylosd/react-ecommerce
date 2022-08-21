import logo from './logo.svg';
import './App.css';
import {Header, Grid, Home} from './components';

function App() {
  return (
    <div className="App w-[410px] tablet:w-[786px] desktop:w-[1200px] hd:w-[1640px] mx-auto">
      <Home />
    </div>
  );
}

export default App;
