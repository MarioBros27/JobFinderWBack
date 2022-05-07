import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Jobs from './routes/jobs';
import Job from './routes/job'
import Home from './routes/home'
import Error from './routes/error'
import Profile from './routes/profile'
import Login from './routes/login'
import Faq from './routes/faq'
import Us from './routes/us'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<Job />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="home" element={<Home />} />
          <Route path="us" element={<Us />} />
          {/* <Route path="faq" element={<Faq />} /> */}
        </Route>
        {/* <Route path="/login" element= {<Login/>}/> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
