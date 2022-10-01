import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [alcool, setAlcool] = useState("");
  	const [gasolina, setGasolina]= useState("");
  	const [resultado,setResultado]= useState("");
  	function calcular(){
		let resultado = parseFloat(alcool) / parseFloat(gasolina); setResultado(resultado);
		
		if (resultado >= 0.7) {
			setResultado("Abasteça Gasolina: " + resultado);
		} else {
			setResultado("Abasteça Álcool: " + resultado);
		}
	}
  	return (
    	<View style={styles.container}>
			<View style={styles.bloco}>
				<Text style={styles.titulo}>Qual a melhor opção de combustível?</Text>
			</View>
			
			<View style={styles.bloco}>
				<Text> Álcool </Text>
				<TextInput style={styles.input} value={alcool} onChangeText={(valor)=>setAlcool(valor)} keyboardType="numeric"/>
			</View>
			
			<View style={styles.bloco}>
				<Text> Combustível </Text>
				<TextInput style={styles.input} value={gasolina} onChangeText={(valor)=>setGasolina(valor)} keyboardType="numeric"/>
			</View>
			<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao} onPress={calcular}>
				<Text style={styles.textoBotao}>Calcular</Text>
				</TouchableOpacity>  
			</View>
			
			<View style={styles.bloco}>
				<Text style={styles.titulo}> 
					Resultado: {resultado}
				</Text>
			</View>
			<View>
			  <Text style={styles.resultado}>Tabela de Comparação :</Text>
			  <Text style={styles.textoInput}>0.0 a 0.6 = Abastecer com Álcool</Text>
			  <Text style={styles.textoInput}>0.7 + = Abastecer com Gasolina</Text>
			</View>
   		</View>
	
  );
}

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#fff'
},
	
bloco:{
	marginTop:20,
	width:'80%',
	marginLeft: 'auto',
	marginRight: 'auto'
},
	
  titulo:{
	  fontSize:30,
	  textAlign:'center'
  },
	
  input:{
	borderWidth:2,
	fontSize:20,
	borderRadius:10
  },
	
  botao:{
	  backgroundColor:'#000',
	  borderRadius:10
  },
	
  textoBotao:{
	  color:'#FFF',
	  textAlign:'center',
	  fontSize:20,
  },
	
	textoInput:{
    textAlign:'center',
    fontSize: 18,
    marginTop: 2,
  },

 	resultado:{
    textAlign: 'center',
    marginTop: 15,
    fontSize: 19,
  }
});