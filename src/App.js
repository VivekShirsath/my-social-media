import {Routes,Route} from 'react-router-dom'
import { Login } from './pages/login';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { BookMarks } from './pages/BookMarks';
import Mockman from "mockman-js";
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="flex">
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
        <Route path = "/login" element={<Login/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
