import React from "react";

function Export(){
    return <h1>First Export</h1>
}

function Export2(){
    return <h1>Second Export</h1>
}

// Named Export
export function Export3(){
    return <h1>Third Export</h1>
}

// Default Export
export default Export

//Named Export
// export {Export,Export2};
export {Export2}