import { useState } from 'react'
import { styled, createGlobalStyle } from 'styled-components'

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
	background-color: #72729e;
	height: 100vh;
	width:100vw;
}

`
const Container = styled.section`
width:400px;
height:350px;
background-color:#06063F;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-radius:10px;
border:1px solid #93F0CC;
`
const Tela = styled.div`
background: rgb(232,232,244);
background: linear-gradient(0deg, rgba(232,232,244,1) 0%, #70c2a2 54%, rgba(248,254,255,1) 100%);
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
background-color:#93F0CC;
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
background-color:#93F0CC; 
border:1px solid black;
border-radius:5px;
`
const Botao = styled.button`
width:30px;
height:30px;
font-size: 22px;
border-radius:50%;
background-color: #0C0C5D;
color:#93F0CC;
border:1px solid black;
transition: width 0.2s, height 0.2s;
&:hover{
	cursor: pointer;
	width:48px;
	height:48px;
	background-color: #414187;
}&:active{
	background-color:#090909; 
	color:white;
}
`
const Labels = styled.label`
color:#fff;
font-size: 20px;
text-align: center;
`
const Msg1 = styled.div`
	background-color: red;
	color:white;
	border-radius: 5px;
`
const Msg2 = styled.div`
	background-color: red;
	color:white;
	border-radius: 5px;
`
export default function Calculadora() {
	const [primeiroValor, setPrimeiroValor] = useState("")
	const [segundoValor, setSegundoValor] = useState("")
	const [resultado, setResultado] = useState(0)
	const [msg, setMsg] = useState("")
	const [msg2, setMsg2] = useState("")

	const CapturarValor = (item) => {

		setPrimeiroValor(Number(item.target.value))
	}
	const CapturarSegundoValor = (item) => {

		setSegundoValor(Number(item.target.value))
	}
	const Soma = () => {
		if (primeiroValor === "") {
			setMsg("Insira um valor!")
		}
		if (segundoValor === "") {
			setMsg2("Insira um valor!")
		} else {
			setResultado(primeiroValor + segundoValor)
			setMsg("")
			setMsg2("")
		}
	}
	const Subtracao = () => {
		if (primeiroValor === "") {
			setMsg("Insira um valor!")
		}
		if (segundoValor === "") {
			setMsg2("Insira um valor!")
		} else {
			setResultado(primeiroValor - segundoValor)
			setMsg("")
			setMsg2("")
		}
	}
	const Divisao = () => {
		if (primeiroValor === "") {
			setMsg("Insira um valor!")
		}
		if (segundoValor === "") {
			setMsg2("Insira um valor!")
		} else {
			setResultado(primeiroValor / segundoValor)
			setMsg("")
			setMsg2("")
		}
	}
	const Multiplicacao = () => {

		if (primeiroValor === "") {
			setMsg("Insira um valor!")
		}
		if (segundoValor === "") {
			setMsg2("Insira um valor!")
		} else {
			setResultado(primeiroValor * segundoValor)
			setMsg("")
			setMsg2("")
		}
	}
	const limpar = () => {
		setResultado(0);
		setPrimeiroValor("")
		setSegundoValor("")
		setMsg("")
		setMsg2("")
	}

	return (
		<>
			<GlobalStyle />
			<Container>
				<h1 style={{ color: "#fff" }}>Calculadora</h1>
				<ContainerEntrada>

					<Labels>Primeiro Valor
						<Entrada type="number" value={primeiroValor} onChange={CapturarValor} onFocus={() => setMsg("")} />
					</Labels>
					<Msg1>{msg}</Msg1>

					<Labels>Segundo Valor
						<Entrada type="number" value={segundoValor} onChange={CapturarSegundoValor} onFocus={() => setMsg2("")} />
					</Labels>
					<Msg2>{msg2}</Msg2>

					<Labels>Operação</Labels>

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
					<Botao style={{ height: "40px", width: "40px" }} onClick={limpar}>C</Botao>

				</ContainerTela>

			</Container>
		</>
	)
}


