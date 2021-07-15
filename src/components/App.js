import React from "react";


class App extends React.Component{
  render(){
    return(
      <>
        <p>meu primeiro paragrafo</p>
        <p>meu segundo paragrafo</p>
        <p> { new Date().toLocaleDateString('pr-BR') } </p>
      </>
    );
  }
}
export default App;
