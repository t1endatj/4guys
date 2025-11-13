import { useState } from 'react'; // Import useState
import Loader from './components/Loader';
import Homepage from './components/homepage'; // Import Homepage
import './App.css';
import Welcome from './components/welcome'; // Import Welcome Modal

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [internData, setInternData] = useState(null);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleSelectStart = (name, role) => {
    setInternData({ name, role });
  }


  if (isLoading) {
    return <Loader onComplete={handleLoadComplete} />;
  }

  // Nếu đã có internData, hiển thị Welcome Modal
  if (internData) {
      return <Welcome 
          internData={internData} 
          //onProjectSubmit={handleProjectSubmit} 
      />;
  }

  // Mặc định: Hiển thị Homepage
  return <Homepage onStart={handleSelectStart} />;
}


export default App;