//import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Lpage from "./components/pages/lpage/Lpage";
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import MyNotes from "./MyNotes/MyNotes";
import LoginScreen from "./components/pages/LoginPage/LoginScreen";
import RegisterScreen from "./components/pages/RegisterPage/RegisterScreen";
//import Background from "./components/Background/Background";

const App = ()=>(
<BrowserRouter>
    <Header/>
        <main >
            <Routes>
                <Route path="/" element={<Lpage/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/register" element={<RegisterScreen/>}/>
                <Route path="/mynotes" element={<MyNotes/>}/>
            </Routes>
        </main>
    <Footer/>
</BrowserRouter>
);
export default App;
