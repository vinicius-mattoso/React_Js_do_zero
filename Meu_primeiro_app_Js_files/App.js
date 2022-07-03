// 
// CRIANDO MEU PRIMEIRO COMPONENTE!!!!
// 
// export default function App(){
// return(
//   <div>
//   <h1>Bem vindo ao sistema React </h1>

//   <h2> Meu primeiro app!! </h2>
//   </div>
// )
// }


// import React from 'react';

// CRIANDO MEU PRIMEIRO COMPOENTE STATE LESS:

// const BemVindo=() => {
//   return(
//     <div>
//         <h2> Bem-vindo (a)</h2>
//     </div>
//   );
// }

// // Agora estamos fazendo um componente com uma prop 
// const BemVindo2=(props) => {
//   return(
//     <div>
//         <h2> Bem-vindo (a) {props.nome}</h2>
//     </div>
//   );
// }

// const BemVindo3=(props) => {
//   return(
//     <div>
//         <h2> Bem-vindo (a) {props.nome}</h2>
//         <h3> Tenho {props.idade} anos</h3>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//     <h1>Bem vindo ao sistema React </h1>
//     <BemVindo/>
//     <BemVindo2 nome='Vinicius' />
//     <BemVindo2 nome='Luccas' />
//     <BemVindo3 nome='Pedro' idade='24'/>
//     <h2> Meu primeiro app!! </h2>
//     </div>
//   )
//   }
  
// export default App;

// CRIANDO UM COMPONENTE QUE POSSUI OUTROS COMPONENTES INTERNOS

// const Equipe = (props) => {
//   // Tag para ver se funcionou 
//   // return(<a> Funcionou </a>);
//   return(
//     <div> 
//           {/* Montando a equipe */}
//           <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>
//           <Social fb={props.facebook}/>
//           <hr/>
//     </div>
//   );

// }

// const Sobre = (props) =>{
//     return(
//       <div>
//           <h2>Olá eu sou o(a) {props.username}</h2>
//           <h3>Cargo: {props.cargo}</h3>
//           <h3>Idade: {props.idade}</h3>


//       </div>
//     );

// }

// const Social =(props) =>{
//   return(
//     <div>
//       <a href={props.fb}> Facebook</a> <br/>
//       <a> LinkedIn</a><br/>
//       <a> Youtube</a><br/>
//     </div>
//   )
// }

// NOVA AULA !!
// function App(){
//   return(
//     <div>
//           <h1>Conheça a nossa equipe:</h1>
//           <Equipe nome='Luccas' cargo ='Programador' idade ='29' 
//                   facebook="http://google.com"/>

//           <Equipe nome='Vinicius' cargo ='Engenheiro' idade ='27'
//                   facebook="http://google.com"/>

//           <Equipe nome='Pedro' cargo ='UX' idade ='22'
//                   facebook="http://google.com"/>

//     </div>
//   )
//   }
  
// export default App;

// CRIANDO COMPONENTES DO ESTILO CLASS COMPONENTS

import React, { Component } from 'react';

// AULA  CLASS COMPONENTS!!

class Equipe extends Component{
        // Funcao que vai renderizar na tela 
        render(){
          // Usamos o div para servir de container
          //  Esse formato eh obrigatorio
          return(
            <div>
              <h2>Olá eu sou o(a) {this.props.nome}</h2>
              <h2>Cargo: {this.props.cargo}</h2>
              <h2>Idade: {this.props.idade}</h2>
              <hr/>
            </div>
          );
        }
}

const Social =(props) =>{
  return(
    <div>
      <a href={props.fb}> Facebook</a> <br/>
      <a> LinkedIn</a><br/>
      <a> Youtube</a><br/>
    </div>
  )
}

function App(){
  return(
    <div>
          <h1>Conheça a nossa equipe:</h1>
          <Equipe nome='Luccas' cargo='Programador' idade='24'/>
          <Equipe nome='Vinicius' cargo='Desenvolvedor' idade='27'/>

    </div>
  )
  }
  
export default App;