import { Global } from "@emotion/react";

const estilos = thema => {
    return {
        html: {
            fontFamily: thema.fontFamily
        },
        body: {
            margin: 0
        }
    }
}


export const Estilos = () => {
    return (<Global styles={estilos}/>)
}
