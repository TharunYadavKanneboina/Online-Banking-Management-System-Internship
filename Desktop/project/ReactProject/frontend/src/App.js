import logo from './logo.svg';
import './App.css';

import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <Router>

<div className="container">
  <Routes>
      <Route exact path="/" Component={ListEmployeeComponent}></Route>
      <Route path="/employees" Component={ListEmployeeComponent}></Route>
      <Route exact path="/add-employee" Component={CreateEmployeeComponent}></Route>
      <Route path="/employees" Component={UpdateEmployeeComponent}></Route>
  </Routes>	
</div>
</Router>
    <FooterComponent/>
    </div>
  );
}

export default App;
