import logo from './logo.svg';
import './App.css';
import BestSelling from './components/BestSelling';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center" >
      <div className="w-6/12">
        <BestSelling></BestSelling>
      </div>
    </div>
  );
}

export default App;
