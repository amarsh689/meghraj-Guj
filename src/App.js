import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import ForgetPass from './components/ForgetPass';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <div className="App">
<Router>
<Routes>

<Route path='/' element=<RegistrationForm/>/>
<Route path='login' element=<LoginForm/>/>
<Route path='forgetPassword' element=<ForgetPass/>/>
<Route path="dash" element=<Dashboard/>/>
</Routes>
</Router>

</div>

</>
    
  );
}

export default App;
