import React from 'react';
import ReactDOM from 'react-dom';
import {SearchUserPage, UserPage, MainPage, NotFoundPage} from './components/Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Counter} from './playground/hooks/counter';
import './index.css';

ReactDOM.render(
  <Counter/>,
  document.getElementById(`root`)
);

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path='/' element={<MainPage/>}/>
//       <Route path='/search' element={<SearchUserPage/>}/>
//       <Route path='/user/:userId' element={<UserPage/>}/>
//       <Route path='*' element={<NotFoundPage/>}/>
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );


