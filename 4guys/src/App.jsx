import { useState } from 'react'; // Import useState
import Loader from './components/Loader';
import Homepage from './components/homepage'; // Import Homepage
import './App.css';


function App() {
  
  const [isLoading, setIsLoading] = useState(true); 

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      
      {isLoading ? (
        <Loader onComplete={handleLoadComplete} /> // Truyền hàm xử lý qua prop
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default App;