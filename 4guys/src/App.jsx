import { useState } from 'react'; // Import useState
import Loader from './components/Loader';
import Homepage from './components/homepage'; // Import Homepage
import './App.css';


function App() {
  // 1. Thêm state để kiểm soát việc hiển thị Loader/Homepage
  const [isLoading, setIsLoading] = useState(true); 

  // 2. Hàm để chuyển trạng thái từ loading sang hiển thị trang chủ
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* 3. Hiển thị Loader nếu isLoading là true, ngược lại hiển thị Homepage */}
      {isLoading ? (
        <Loader onComplete={handleLoadComplete} /> // Truyền hàm xử lý qua prop
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default App;