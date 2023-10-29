import { useState } from 'react'
import {styled, createGlobalStyle }from 'styled-components'

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
const Container = styled.form`
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
justify-content:space-around;
text-align:center;`

const Entrada = styled.input`
width: 320px;
height:30px;
border-radius:5px;
font-weight:bold;
font-size:20px;
background-color:#00b3fe;
border:1px solid black;
text-align:center;
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
justify-content: space-evenly;
background-color:#00b3fe; 
border:1px solid black;
border-radius:5px;
`
const Botao = styled.button`
width:30px;
height:30px;
font-size: 22px;
border-radius:50%;
background-color: #defe47;
&:hover{
	cursor: pointer;
	color:white;
	background-color:#7700a6; 
	transform: scale(1.5,1.5);
	transition: ease-in-out 0.2s;
}
`
const Labels = styled.label`
color:#000;
font-size: 20px;
text-align: center;
`

export default function App() {
	const [primeiroValor, setPrimeiroValor] = useState()
	const [segundoValor, setSegundoValor] = useState()
	const [resultado, setResultado] = useState(0)

	const CapturarValor = (item) => {
		setPrimeiroValor(Number(item.target.value))
	}
	const CapturarSegundoValor = (item) => {
		setSegundoValor(Number(item.target.value))
	}
	const Soma = (event) => {
		event.preventDefault()
		setResultado(primeiroValor + segundoValor)
	}
	const Subtracao = (event) => {
		setResultado(primeiroValor - segundoValor)
		event.preventDefault()
	}
	const Divisao = (event) => {
		setResultado(primeiroValor / segundoValor)
		event.preventDefault()
	}
	const Multiplicacao = (event) => {
		setResultado(primeiroValor * segundoValor)
		event.preventDefault()
	}
	const limpar = (event) => {
		setResultado(0);
		setPrimeiroValor("")
		setSegundoValor("")
		event.preventDefault()
	}

	return (
		<>
		<GlobalStyle/>
			<Container>
				<h1 style={{color: "#defe47"}}>Calculadora</h1>
				<ContainerEntrada>

					<Labels>Primeiro Valor
					<Entrada type="number" value={primeiroValor}onChange={CapturarValor} />
					</Labels>

					<Labels>Segundo Valor
					<Entrada type="number" value={segundoValor} onChange={CapturarSegundoValor} />
					</Labels>

					<Labels>Operaçao</Labels>

					<ContainerBotoes>
					<Botao onClick={Soma}>+</Botao>
					<Botao onClick={Subtracao}>-</Botao>
					<Botao onClick={Divisao}>÷</Botao>
					<Botao onClick={Multiplicacao}>x</Botao>
				</ContainerBotoes>

				</ContainerEntrada>

				<Labels>Resultado</Labels>

				<ContainerTela>
			
					<Tela>{resultado.toFixed(1)}</Tela>
					<Botao style={{height: "40px", width:"40px"}} onClick={limpar}>C</Botao>

				</ContainerTela>

			</Container>
		</>
	)
}


