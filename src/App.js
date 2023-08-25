import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Page1 } from './routes/page1';
import { Page2 } from './routes/page2';
import { Page3 } from './routes/page3';
import { Page4 } from './routes/page4'

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
