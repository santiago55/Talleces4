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

import React, { useState, useEffect } from 'react';

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

export default Cronometro;