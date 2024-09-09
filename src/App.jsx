import { useEffect, useState } from 'react';
import './App.css';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Explore from './Components/Explore/Explore';

function App() {
  let heroData = [
    {text1:'Dive into',text2:'what you love'},
    {text1:'Indulge',text2:'your passions'},
    {text1:'Give in to',text2:'your passions'}
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=> {return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div className="container">
      <Navbar/>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero 
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
      <Explore/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
