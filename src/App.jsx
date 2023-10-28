import { useState } from 'react'
import {styled, createGlobalStyle }from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
	margin:0px;
	padding: 0px;
	box-sizing: border-box;
	font-family: Inter, Arial, sans-serif;
}
body{
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #7700a6;
	height: 100vh;
	width:100vw;
}

`
const Container = styled.main`
width:400px;
height:300px;
background-color:#fe00fe;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-radius:10px;
border:1px solid #000;
`
  const Tela = styled.div`

background-color:#00b3fe;
border:1px solid black;
border-radius:10px;
width:250px;
height:40px;
font-size:25px;
color:black;
font-family: 'Orbitron', sans-serif;`

const ContainerTela = styled.section`
width:350px;
height:40px;
display:flex;
justify-content:space-around;`

const Entrada = styled.input`
width: 320px;
height:30px;
border-radius:5px;
`
const ContainerEntrada = styled.section`
width:350px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ContainerBotoes = styled.section`
width: 320px;
height:50px;
align-items: center;
display: flex;
justify-content: space-between;
`
const Botao = styled.button`
width:30px;
height:30px;
border-radius:50%;
background-color: #defe47;
`

function App() {
	const [primeiroValor, setPrimeiroValor] = useState(0);

	const [segundoValor, setSegundoValor] = useState(0);

	const [resultado, setResultado] = useState(0);


	const CapturarValor = (item) => {
		setPrimeiroValor(Number(item.target.value))
	}
	const CapturarSegundoValor = (item) => {
		setSegundoValor(Number(item.target.value))
	}

	const Soma = () => {
		setResultado(primeiroValor + segundoValor)
	}
	const Subtracao = () => {
		setResultado(primeiroValor - segundoValor)
	}
	const Divisao = () => {
		setResultado(primeiroValor / segundoValor)
	}
	const Multiplicacao = () => {
		setResultado(primeiroValor * segundoValor)
	}

	const limpar = () => {
		setResultado(0);
		setPrimeiroValor(0)
		setSegundoValor(0)
	}

	return (
		<>
		<GlobalStyle/>
			<Container>
				<h1 style={{color: "#defe47"}}>Calculadora</h1>
				<ContainerTela>
					<Tela>{resultado}</Tela><Botao style={{height: "40px", width:"40px"}} onClick={limpar}>C</Botao>
				</ContainerTela>
				<ContainerEntrada>
					<Entrada type="number" onChange={CapturarValor} />
					<ContainerBotoes>
					<Botao onClick={Soma}>+</Botao>
					<Botao onClick={Subtracao}>-</Botao>
					<Botao onClick={Divisao}>÷</Botao>
					<Botao onClick={Multiplicacao}>x</Botao>
				</ContainerBotoes>
					<Entrada type="number" onChange={CapturarSegundoValor} />
				</ContainerEntrada>


			</Container>
		</>
	)
}

export default App
