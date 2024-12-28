import './MainDashApp.css'
import MainDash from './MainDash/MainDash';
import RightSide from './Rightside/Rightside';
import Sidebar from './Sidebar';


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
