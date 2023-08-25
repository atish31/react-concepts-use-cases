import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Page1 } from './routes/Page1';
import { Page2 } from './routes/Page2';
import { Page3 } from './routes/Page3';
import { Page4 } from './routes/Page4';

function App() {
  return (
   <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Page1</Link>
        </li>
        <li>
          <Link to='/page2/page3/3'>Page2</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Page1 />}/>
      <Route path='/page2' element={<Page2 />}>
        <Route path='page3' element={<Page3 />}>
            <Route path=':id' element={<Page4 />}></Route>
        </Route>
      </Route>
    </Routes>
   </>
  );
}

export default App;
