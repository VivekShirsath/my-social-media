import {Routes,Route} from 'react-router-dom'
import { Login } from './pages/login';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { BookMarks } from './pages/BookMarks';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';
import Mockman from "mockman-js";
import { ProtectedRoute } from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <>
        <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    <div className="flex text-md relative font-inter">
     <Routes>
      <Route>
        <Route path = "/" element={
          <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
        }/>
        <Route path = "/explore" element={
          <ProtectedRoute>
        <Explore/>
        </ProtectedRoute>
        }/>
        <Route path = "/bookmarks" element={
          <ProtectedRoute>
        <BookMarks/>
        </ProtectedRoute>
        }/>
        <Route path = "/profile/:username" element={
          <ProtectedRoute>
        <Profile/>
        </ProtectedRoute>
        }/>
        <Route path = "/login" element={<Login/>}/>
        <Route path ="/signup" element = {<SignUp/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Route>
     </Routes>
    </div>
    </>
  );
}

export default App;
