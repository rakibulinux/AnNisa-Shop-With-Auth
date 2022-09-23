import { useState, useEffect } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)
  const countIncrease = () => {
    setCount( count + 1);
  }
  const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    }, [])
  return (
    <div className="App w-11/12 mx-auto">
      <Header guns={guns} count={count}></Header>
      <AllGuns countIncrease={countIncrease}></AllGuns>
      <Footer></Footer>
    </div>
  );
}

export default App;
