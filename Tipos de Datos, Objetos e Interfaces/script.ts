type Programador = {
    tecnologias: string[],
    nombre: string,
    tomaMate: boolean,
    años: number
};

let programador1: Programador = {
    tecnologias: ['GO', 'COBOL', 'PHP'],
    nombre: 'Fernando Juarez',
    tomaMate: false,
    años: 30
}

let programador2: Programador ={
    tecnologias: ['HTML', 'CSS', 'JAVASCRIPT'],
    nombre: 'Joaquin Gil',
    tomaMate: true,
    años: 25
}


interface Programadores {
    tecnologias: string[],
    nombre: string,
    tomaMate: boolean,
    años: number
};

function cvProgramadores (programador : Programadores){
    console.log(`Este curriculum es de ${programador.años}`)
}

cvProgramadores(programador2);