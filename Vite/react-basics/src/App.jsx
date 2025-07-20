import React from "react";

function FirstComponent(){
  return(
    <div>
        <h2>This is My first Component </h2>
        <FirstAppComponent></FirstAppComponent>
    </div>
  );
}

const FirstAppComponent = ()=>{
  return(
    <h2> This is My Second Component </h2>
  )
}

export default FirstComponent;