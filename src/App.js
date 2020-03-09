import React, {useRef, useState} from 'react';

function App() {
  var [message, setMsg] = useState()
  const nameRef = useRef()
  
  
  function handleClick(e){
    const name = "Hello "+ nameRef.current.value
    
    setMsg(name)
  }

  return (
    <div className="App">
      <input ref={nameRef} type="text" />
      <button onClick={handleClick}> Click </button>
      <p> {message} </p>
    </div>
  );
}

export default App;