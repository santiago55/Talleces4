import React, { useRef, useEffect, useState } from "react";

export default function Cronometro() {
  const [num, setNum] = useState(15);
  const [pause, setPause] = useState(false);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);
  
  return (
    <div>
      <h1>{num}</h1>
      
    </div>
  );
}



/*import React, { Component } from 'react'

class Cronometro extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 30
    }
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <h1>Current Count: {count}</h1>
      </div>
    )
  }
  // setInterval
  // clearInterval
  componentDidMount () {
    this.myInterval = setInterval(() => {
        this.setState(prevState => ({
          count: prevState.count - 1
        }))
        console.log(this.estado) 
        if(this.state.count === 0){
            window.location.href ="/";
            alert("Se te acabo el tiempo muchas gracias por jugar");
          }
      }, 1000)
      
  }

}

export default Cronometro;*/

/*import React, { useState, useEffect } from 'react';

function Cronometro() {
    const [contador, guardarContador] = useState(30);

    useEffect(() => {
        setInterval(() => {
            guardarContador(contador-1);
        }, 1000);


    }, [guardarContador, contador]);

        return (
            <h1>{contador}</h1>
        );
}

export default Cronometro;*/