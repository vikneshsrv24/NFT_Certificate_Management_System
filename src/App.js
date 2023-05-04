import './App.css';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import NewSellNFT from './components/NewSellNFT';
import NFTPage from './components/NFTpage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/marketplace" element={<Marketplace />}/>
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>
          <Route path="/newsellNFT" element={<NewSellNFT />}/>             
        </Routes>
    </div>
  );
}

export default App;