import logo from './logo.svg';
import Navbar from './component/Navbar';
import SubNavbar from './component/SubNavbar';
import Home from './component/Home';
import Painting from './component/Painting';
import WallArt from './component/WallArt';
import ArtPlate from './component/ArtPlate';
import Culture from './component/Culture';
import Clocks from './component/Clocks';
import Handpainting from './component/Handpainting';
import Rooms from './component/Rooms';
import LoginPage from './component/LoginPage';

import {
  BrowserRouter as Main,
  Routes,
  Route,

} from "react-router-dom"

function App() {
  return (
    <>
      <Main>
        <Navbar />
        <SubNavbar />
       
        <Routes>
            <Route path='/*' element={<Home/>} />
            <Route path='/painting' element={<Painting/>} />
            <Route path='/wall-art' element={ <WallArt/> } />
            <Route path='/art-plate' element={ <ArtPlate/> } />
            <Route path='/hand-painting' element={ <Handpainting/> } />
            <Route path='/culture' element={ <Culture/> } />
            <Route path='/clocks' element={ <Clocks/> } />
            <Route path='/rooms' element={ <Rooms/> } />
            <Route path='/login-page' element={ <LoginPage/>} />
        </Routes>

      </Main>
    </>
  );
}

export default App;
