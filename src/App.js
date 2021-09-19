import './App.css';
import Passagem from './componentes/Passagem';

/* 
  Trabalho 01 - Técnicas de Programação
   Curso: 2° Semestre Desenvolvimento de Software Multiplataforma
   Aluno: Gabriel Resende Spirlandelli
*/

function App() {
  return (
    <div className="App">
        <h1>Reserve a sua passagem </h1>
       <div className="listaPassagens">
         <Passagem numero={1} origem='Belo Horizonte' destino='Campinas' lugares_disponiveis={27} lugares_totais={40}/>
         <Passagem numero={2} origem='Salvador' destino='Rio de Janeiro' lugares_disponiveis={9} lugares_totais={60}/>
         <Passagem numero={3} origem='São Paulo' destino='Brasília' lugares_disponiveis={30} lugares_totais={30}/>
         <Passagem numero={4} origem='Porto Seguro' destino='Fortaleza' lugares_disponiveis={15} lugares_totais={20}/>
       </div>
       <div className="listaPassagens">
         <Passagem numero={5} origem='Recife' destino='Curitiba' lugares_disponiveis={5} lugares_totais={50}/>
         <Passagem numero={6} origem='Ribeirão Preto' destino='Campinas' lugares_disponiveis={7} lugares_totais={20}/>
         <Passagem numero={7} origem='João Pessoa' destino='Cuiaba' lugares_disponiveis={0} lugares_totais={40}/>
         <Passagem numero={8} origem='Belém' destino='Ceará' lugares_disponiveis={10} lugares_totais={40}/>
       </div>
       <div className="listaPassagens">
          <Passagem numero={9} origem='Goiânia' destino='Natal' lugares_disponiveis={30} lugares_totais={60}/>
          <Passagem numero={10} origem='Navegantes' destino='Campo Grande' lugares_disponiveis={10} lugares_totais={20}/>
          <Passagem numero={11} origem='São Luís' destino='Teresina' lugares_disponiveis={20} lugares_totais={20}/>
          <Passagem numero={12} origem='Maceió' destino='Salvador' lugares_disponiveis={0} lugares_totais={50}/>
       </div>
    </div>
  );
}

export default App;
