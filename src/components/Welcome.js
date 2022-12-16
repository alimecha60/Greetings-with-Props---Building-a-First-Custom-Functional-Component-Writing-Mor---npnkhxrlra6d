// write code for Welcome component here
import React from "react";
function Greeting (){
    return(
        <h2>Welcome to Newton School</h2>
    );
}
function Welcome({name}){
    return (
       <>
       <h1>hey! {name}</h1>
         <Greeting/>
       </>
    );
}
export default Welcome
