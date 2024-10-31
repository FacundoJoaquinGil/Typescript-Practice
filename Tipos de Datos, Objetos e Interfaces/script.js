"use strict";
let programador1 = {
    tecnologias: ['GO', 'COBOL', 'PHP'],
    nombre: 'Fernando Juarez',
    tomaMate: false,
    años: 30
};
let programador2 = {
    tecnologias: ['HTML', 'CSS', 'JAVASCRIPT'],
    nombre: 'Joaquin Gil',
    tomaMate: true,
    años: 25
};
;
function cvProgramadores(programador) {
    console.log(`Este curriculum es de ${programador.años}`);
}
cvProgramadores(programador2);
