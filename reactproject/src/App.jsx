import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './components/About';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SingUp';
import Signin from './components/signin';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import LogOut from './components/logout';
import SignUpBiz from './components/signubbiz';
import CreatCard from './components/creatcard';
import MyCards from './components/Mycards';
import ProtectedRoutes from './components/common/protectedroutes';
import DeleteCard from './components/deletecard';
import EditCard from './components/editCard';

function App() {
  return (
    <div className="app d-flex flex-column bg-info min-vh-100">
      <ToastContainer/>
  <header className=""><Navbar/></header>

  <main className="container flex-fill">
  <Routes>
  <Route path="SignUp" element={<SignUp redirect="/signin" />}/>
  <Route path="signin" element={<Signin redirect="/"/>}/>
  <Route path="signout" element={<LogOut redirect="/"/>}/>
  <Route path="signupbiz" element={<SignUpBiz redirect="/my-cards/creat-card"/>}/>
    <Route path="/" element={<Homepage/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="/my-cards/creat-card" element={<ProtectedRoutes onlyBiz>
      <CreatCard/>
    </ProtectedRoutes>}/>
    <Route path="my-cards" element={<ProtectedRoutes onlyBiz>
      <MyCards/>
    </ProtectedRoutes>}/>
    <Route
            path="my-cards/edit/:id"
            element={
              <ProtectedRoutes onlyBiz>
                <EditCard/>
              </ProtectedRoutes>
            }
          />
    <Route path="/my-cards/delete/:id"
     element={<ProtectedRoutes onlyBiz>
      <DeleteCard/>
    </ProtectedRoutes>}/>

  </Routes>

    </main>
  <footer className=""><Footer/></footer>

    </div>
  );
}

export default App;
