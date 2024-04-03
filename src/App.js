import './App.css';
import SideNavigation from './components/sideNavigation/SideNavigation';
import Timesheet from './components/timesheet/Timesheet';

function App() {
  return (
    <div className="app-container">
      <div className="scrollable-container">
        <SideNavigation/>
        <Timesheet/>
      </div>
    </div>
  );
}

export default App;
