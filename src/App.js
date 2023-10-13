import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FetchData from './components/FetchData';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <FetchData></FetchData>
    </div>
  );
}

export default App;
