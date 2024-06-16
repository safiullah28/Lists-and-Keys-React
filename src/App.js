import React from 'react'

function App() {
  let PSL=["KK","LQ","IU","IU"];
  function dlt(i){
    let total = [...PSL];
    total.splice(i, 1);
    PSL=[...total];
  }
  return (
    <div className="App">
      {
        PSL.map((element,index)=>{
          return(
            <div key={index}>
            <h1><span>{index}</span>{element}</h1>
            <button onClick={()=>{dlt(index)}}> Delete </button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
