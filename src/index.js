import React from 'react';
import ReactDOM from 'react-dom';
import {SearchUserPage, UserPage, MainPage, NotFoundPage} from './components/Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {YearsAndEggs} from './playground/hooks/YearsAndEggs';
import './index.css';
// import { Table } from './playground/problem/Table';
import {Reducer} from './playground/hooks/useReducer';
// import {Example} from './playground/hooks/useCallback';
// import {TextToggler} from './playground/hooks/useEffect';

// ReactDOM.render(
//   <YearsAndEggs/>,
//   document.getElementById(`root`)
// );

ReactDOM.render(
  <Reducer/>,
  document.getElementById('root')
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


