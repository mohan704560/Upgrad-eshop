import ModifyProduct from './componenets/ModifyProduct'
import AddProduct from './componenets/AddProduct';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Page_Signin from './componenets/Page_Signin';
import Page_Signup from './componenets/Page_Signup';
import Page_HomePage from './componenets/Page_HomePage';
import store from './componenets/Store/Store'
import { Provider } from 'react-redux';
import Page_product from "./componenets/Page_product";
import Order from "./componenets/Order";

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Page_HomePage/>}/>
        <Route exact path="/Sign_In" element={<Page_Signin/>}/>
        <Route exact path="/Sign_up" element={ <Page_Signup/>}/>
        <Route exact path="/productDetail" element={<Page_product/>}/>
        <Route exact path="/order" element={<Order/>}/>
        <Route exact path="/update" element={<ModifyProduct/>}/>
        <Route exact path="/AddProduct" element={<AddProduct/>}/>
      </Routes>
    </Router>
    </Provider> 
      </>
  );
}

export default App;
