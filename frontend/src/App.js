//import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Lpage from "./components/pages/lpage/Lpage";
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import MyNotes from "./MyNotes/MyNotes";
//import Background from "./components/Background/Background";

const App = ()=>(
<BrowserRouter>
    <Header/>
        <main >
            <Routes>
                <Route path="/" element={<Lpage/>}/>
                <Route path="/mynotes" element={<MyNotes/>}/>
            </Routes>
        </main>
    <Footer/>
</BrowserRouter>
);
export default App;
