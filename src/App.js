import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './Home';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Login from "./Login"

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer limit={3} />
      </Provider>
    </div>
  )
}

export default App;
