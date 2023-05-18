import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PagPrincipal from './pages/pagPrincipal';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PagPrincipal/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
