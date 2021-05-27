import React, { useState} from 'react';
import api from './services/api';

export default function App(){


	const [pokemon, setPokemon] = useState(null);
	const [error, setError] = useState(null);
	const [typedPokemon, setTypedPokemon] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Como teremos um elemento de input, é necessário criarmos uma função para tratarmos deste elemento.
	/*
	useEffect( () => {

        async function funcaoLegal(){
            const response = await api.get(`/pokemon/${typedPokemon}`)
            setPokemon(response.data);
        }

        funcaoLegal();
    }, [])
	*/
	function changeInput(event) {
		setTypedPokemon(event.target.value);
		console.log(typedPokemon)
	}
	
	async function handleSubmit(event) {
		event.preventDefault();

		if(!typedPokemon){
			console.log("Tem nada")
			return;
		}
		setIsLoading(true);


		try {
			const response = await api.get(`/pokemon/${typedPokemon}`)
			setError(null);
			setIsLoading(false)
			setPokemon(response.data);
			console.log(response.data)

		} catch (error) {
			setPokemon(null);
			setIsLoading(false)
			setError("Pokemon nao encontrado")
		}
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