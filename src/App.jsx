import Login from './pages/onboarding/Login'
import Signup from './pages/onboarding/Signup';
import ForgotPassword from './pages/onboarding/ForgotPassword';
import Practitioner from './pages/onboarding/Practitioner';
import AddressInfo from './pages/onboarding/AddressInfo';
import OrganizationInfo from './pages/onboarding/OrganizationInfo';
import PractitionerInfo from './pages/onboarding/PractitionerInfo';
import { BrowserRouter as Router, Route, Routes, Navigate,} from 'react-router-dom'; 
import './styles/fonts.css'

//redux
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  return (    
   <Provider store={store}>
   <Router> 
   <Routes>
   <Route exact path='/' element={<Login/>} />
   <Route exact path='signup' element={<Signup/>} />
   <Route exact path='login' element={<Login/>} />
   <Route exact path='forgotpassword' element={<ForgotPassword/>} />
   <Route exact path='practitioner' element={<Practitioner/>} />
   <Route exact path='addressinfo' element={<AddressInfo/>} />
   <Route exact path='practitionerinfo' element={<PractitionerInfo/>} />
   <Route exact path='organizationinfo' element={<OrganizationInfo/>} />

  

  
   <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
   </Routes>
   </Router>
   </Provider>
  );
}

export default App;
