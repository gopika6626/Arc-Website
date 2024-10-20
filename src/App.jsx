import React, { useState, useEffect } from 'react';
import './App.css'
import './Swipe'
import Cns from './assets/cnslcomponent.png';
import Mask from './assets/Mask group1.png'
import Masks from './assets/Mask group left top.png'
//import Vectors from './assets/Vector2.png'
import Cnsl from './cnsl12.png'
import Vector from './Component 8.png';
import Element from './Component 7.png';
import Text from './Redefine.png'
import Texts from './Redefine (1).png'
import Play from './Frame 7.png'
import Reality from './Frame 6.png'
import Gaming from './Frame 6 (1).png'
import Realityy from './Frame 6 (4).png'
import Plays from './Frame 6 (2).png'
import Game from './Frame 6 (5).png'
import Masked from './Frame 12 (2).png'
import Arc from './arc (1).png'
import Intro from './introducing.png'
import Cvect from './thirdvector.png'
import Aline from './arcline(1).png'
//import Bline from './arcline(2).png'
import Cline from './arclinesw.png'
import Sideu from './sideleft.png'
import Sidem from './sidemiddle.png'
import Sideup from './rsideupper.png'
import Sidelow from './rsidelower.png'
import Lsidelow from './lsidelower.png'
import Msidelow from './masksidelower.png'
import Msideup from './masksideupper.png'
import Lmask from './lmasksideupper.png'
import Mvector from './Group 2 (1).png'
import Uvector from './Group 3 (1).png'
import Dot from './dot.png'
import Cornervect from'./Group 48095299.png'





const App = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [secondLaunch, setSecondLaunch] = useState(false); 
  const [isAnimating, setIsAnimating] = useState(false);

  const postElements = [
    <img src = {Plays} alt = "plays" className = "playword"/>,
    <img src = {Reality} alt="reality" className = "realityword"/>,
    <img src={Gaming} alt = "gaming" className="gamingword"/>

  ];
  const preElements = [
    <img src = {Play} alt = "play" className = "playyy"/>,
    <img src = {Realityy} alt = "realityy" className = "real"/>,
    <img src = {Game} alt = "game" className = "game"/>
  ]
  const [currentPreElementsIndex, setCurrentPreElementsIndex] = useState(0);
  const [currentPostElementsIndex, setCurrentPostElementsIndex] = useState(0);

  useEffect(() => {
    if(!isLaunched){
      const intervalId = setInterval(() => {
    
    
    setCurrentPreElementsIndex((prevIndex) => (prevIndex + 1) % preElements.length);
    }, 3000);
    return () => clearInterval(intervalId);
   }
 }, [preElements.length,isLaunched]);


useEffect(() => {
  if (isLaunched) {
    const intervalId = setInterval(() => {
      setCurrentPostElementsIndex((prevIndex) => (prevIndex + 1) % postElements.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup
  }
}, [postElements.length, isLaunched]);
  //const wordClasses = ['play-word', 'reality-word', 'gaming-word'];
  

const handleLaunchClick = () => {
  if(!isLaunched) {
  setIsLaunched(true);
  document.body.classList.add('launched');
}
  else if (isLaunched && !secondLaunch) {
  setSecondLaunch(true); 
};
}


  return (
    <div className={`container ${isLaunched ? 'launched' : ''} ${secondLaunch ? 'second-launch' : ''}`}> 
      <div className='constant-text'>
      {!isLaunched?(
        
        <img src={Texts} alt="vector" className="button"/>
      ):<img src= {Text} alt="ele" className="ele"/>
    }
      </div>

<div className={`rotating-text ${isAnimating ? 'exit' : 'enter'}`}
key={currentPreElementsIndex}>
        {!isLaunched?
        preElements[currentPreElementsIndex]
      :postElements[currentPostElementsIndex]
      }
      </div>
      
      <div onClick={handleLaunchClick} className="launch-container">
        {!isLaunched?(
        
          <img src={Vector} alt="vector" className="button"/>
        ):<img src= {Element} alt="element" className="element"/>
      }
      </div>
      <div className="sideel">
       
        <img src={Sidem} alt="sidemiddle" className="sidemid"/>
      </div>
      <div className="sidem">
        {
          <img src={Sideu} alt="sideu" className="sideupper"/>
        }
        </div>
        <div className="sideup">
        {
          <img src={Sideup} alt="sideup" className="sideup"/>
        }
        </div>
        <div className="sidelow">
        {
          <img src={Sidelow} alt="sidelow" className="sidelow"/>
        }
        </div>
        <div className="lsidelower">
        {
          <img src={Lsidelow} alt="lsidelow" className="lsidelow"/>
        }
        </div>
        <div className="masksidelow">
        {
          <img src={Msidelow} alt="msidelow" className="msidelow"/>
        }
        </div>
        <div className="masksideup">
        {
          <img src={Msideup} alt="msideup" className="msideup"/>
        }
        </div>
        <div className="lmask">
        {
          <img src={Lmask} alt="leftmask" className="leftmask"/>
        }
        </div>
        {secondLaunch &&(
        <div className='dotvector'>
          <img src={Dot} alt="dotvector" className="dotvect"/>
          
        </div>)}
        {secondLaunch &&(
        <div className='cornervector'>
          <img src={Cornervect} alt="cornvector" className="cornvect"/>
          
        </div>)}

     
        <div className="cross">
        
        {isLaunched && (
          <img src={Uvector} alt="Vector after first launch" className="first-launch-vector" />
        )}
        {isLaunched && !secondLaunch && (
          <img src={Mvector} alt="Disappearing vector" className="disappearing-vector" />
        )}
        </div>



      
      <div className="cnslvector">
        {!isLaunched?(
          <img src = {Cns} alt="Cnsl" className="side-cnsl"/>

        ):(<img src={Cnsl} alt="New Vector" className="vectorimages" />)}
      
      </div>
      
      <div className='maskvector'>
      <img src ={Mask} alt="Mask" className="mask"/>
      </div>
      <div className='maskvector1'>
        {!isLaunched?(
        <img src = {Masks} alt="Mask" className="mask1"/>
      ):(<img src={Masked} alt = "masked" className = "masked"/>)}

      </div>
      
      <div className='vectors'>
  {/* Conditionally change the vector based on the first and second launch */}
  {!isLaunched ? (
    <img src={Aline} alt="initial vector" className="vectors1" />
  ) : !secondLaunch ? (
    <img src={Cline} alt="vector after first launch" className="vectors1c" />
  ) : (
    <img src={Cline} alt="vector after second launch" className="vectors1b" />
  )}
</div>
      {secondLaunch && (
      <div className = "arc">
      <img src={Arc} alt = "arc" className = "arcvector"/>
      </div>
    ) }
    {secondLaunch && (
      <div className="intro">
        <img  src={Intro} alt = "intro" className = "introvector"/>
        
        </div>
    )}
    {secondLaunch && (
      <div className="cvect">
        <img  src={Cvect} alt = "third" className = "thirdvector"/>
        
        </div>
    )}

    </div>
    

  );
};

export default App;
