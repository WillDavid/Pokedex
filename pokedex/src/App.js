import React, { useState } from 'react';

export default function App(){


	const [pokemon, setPokemon] = useState(null);
	const [error, setError] = useState(null);
	const [typedPokemon, setTypedPokemon] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Como teremos um elemento de input, é necessário criarmos uma função para tratarmos deste elemento.
	
	function changeInput(event) {
		setTypedPokemon(event.target.value);
		console.log(typedPokemon)
	}
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input value={typedPokemon} onChange={changeInput}/>

				<button type="submit">
					{isLoading ? (<span>Carregando</span>) :
					(<span>Buscar</span>)}
				</button>
			</form>
		</div>
	)
}