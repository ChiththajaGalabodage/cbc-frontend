import "./App.css";

import Header from "./components/header";
import ProductCard from "./components/productCard";

function App() {
  return (
    <div className="w-full h-screen bg-red-100 flex flex-col justify-center items-center">
      <div className="w-[650px] h-[650px] bg-red-900 flex flex-col justify-center items-center">
        <div className="w-[600px] h-[600px] bg-green-600 flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] bg-red-600"></div>
          <div className="w-[100px] h-[100px] bg-blue-600 fixed"></div>
          <div className="w-[100px] h-[100px] bg-pink-600"></div>
          <div className="w-[100px] h-[100px] bg-yellow-400"></div>
          <div className="w-[100px] h-[100px] bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
