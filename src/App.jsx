import { useState } from 'react'
import './App.css'
import styled from 'styled-components';

function App() {
	const [primeiroValor, setPrimeiroValor] = useState();

	const [segundoValor, setSegundoValor] = useState();

	const [resultado, setResultado] = useState();

	const Container = styled.main`
  width:400px;
  height:300px;
  background-color:red;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  `
	const Tela = styled.div`
  
  background-color:lime;
  border:1px solid black;
  border-radius:5px;
  width:250px;
  height:50px;
  font-size:30px;`

const ContainerTela = styled.section`
width:350px;
height:50px;
display:flex;
justify-content:space-around;`

const Entrada = styled.input`
width: 100px;
height:50px;
border-radius:5px;
`
const ContainerEntrada = styled.section`
width:350px;
display:flex;
justify-content: space-around;
`
const ContainerBotoes = styled.section`
width: 350px;
display: flex;
justify-content: space-around;
`
	const CapturarValor = (item) => {

		setPrimeiroValor(Number(item.target.value));
	}
	const CapturarSegundoValor = (item) => {
		setSegundoValor(Number(item.target.value));
	}

	const Soma = () => {
		setResultado(primeiroValor + segundoValor);
	}
	const Subtracao = () => {
		setResultado(primeiroValor - segundoValor);
	}
	const Divisao = () => {
		setResultado(primeiroValor / segundoValor);
	}
	const Multiplicacao = () => {
		setResultado(primeiroValor * segundoValor);
	}

	const limpar = () => {
		setResultado(0);
		setPrimeiroValor(0)
		setSegundoValor(0)
	}

	return (
		<>
			<Container>
				<h1>Calculadora</h1>
				<ContainerTela>
					<Tela>{resultado}</Tela><button onClick={limpar}>Limpar</button>
				</ContainerTela>
				<ContainerEntrada>
					<Entrada type="number" onChange={CapturarValor} />
					<Entrada type="number" onChange={CapturarSegundoValor} />
				</ContainerEntrada>
				<ContainerBotoes>
					<button onClick={Soma}>+</button>
					<button onClick={Subtracao}>-</button>
					<button onClick={Divisao}>÷</button>
					<button onClick={Multiplicacao}>x</button>
				</ContainerBotoes>

			</Container>
		</>
	)
}

export default App
