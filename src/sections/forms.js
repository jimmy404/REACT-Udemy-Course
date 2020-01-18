import React, { Component } from 'react'

export default class Form extends Component {
    render(){
        return(
            <div>
                <h4>Formulario</h4>
                <form>
                    <p>
                        <label>Nombre:</label>
                        <input
                            id="name"
                            name="userName"
                            placeholder="Introduce el nombre"
                            />
                    </p>

                    <p>
                        <label>Twitter:</label>
                        <input
                            id="twitter"
                            name="twitterName"
                            placeholder="Introduce tu twitter"
                            />
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}