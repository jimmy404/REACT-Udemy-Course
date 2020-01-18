import React, { Component } from 'react'

export default class Form extends Component {
    handleClick = (e) => {
        e.preventDefault()
        const name = this.inputName.value
        const email = document.getElementById('twitter').value
        console.log({name, email})
    }
    render(){
        return(
            <div>
                <h4>Formulario</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre:</label>
                        <input
                            id="name"
                            name="userName"
                            placeholder="Introduce el nombre"
                            ref={inputElement => this.inputName = inputElement}
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