import PrimarySearchAppBar from './componenets/NavigationBar'
// import './App.css';
import SignIn from './componenets/SignIn';
// import Signup from './componenets/Signup'
// import UserCard from './componenets/UserCard';
// import AdminCard from "./componenets/AdminCard"
// import ProductToggleButton from './componenets/ToggleButton';
// import ProducDetail from './componenets/ProducDetail';
// import Order from './componenets/Order';
// import ModifyProduct from './componenets/ModifyProduct'
// import AddProduct from './componenets/AddProduct';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Page_Signin from './componenets/Page_Signin';
import Page_Signup from './componenets/Page_Signup';
import Page_HomePage from './componenets/Page_HomePage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Page_HomePage/>}/>
        <Route exact path="/Sign_In" element={<Page_Signin/>}/>
        <Route exact path="/Sign_up" element={ <Page_Signup/>}/>
      </Routes>
    </Router>
      
     
      {/* <Signup/>
      <UserCard/>
      <AdminCard/>
      <ProductToggleButton/>
      <ProducDetail/>
      <Order/>
      <ModifyProduct/>
      <AddProduct/> */}
      </>
  );
}

export default App;
