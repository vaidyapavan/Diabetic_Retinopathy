import './MainDashApp.css'
import MainDash from './MainDash/MainDash';
import Sidebar from './Sidebar';
import RightSide from './RightSide/RightSide';

function MainDashApp() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default MainDashApp;