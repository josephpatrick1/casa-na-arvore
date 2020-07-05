

/*

    Primeito argumento: Array de objetos para fazer o group
    Segundo Argumento: A chave o elemento a ser separado

*/

        

export const group = function(Array: any, Categoria: any) {
    return Array.reduce(function(acumulador: any, elemento: any) {
        (acumulador[elemento[Categoria]] = acumulador[elemento[Categoria]] || []).push(elemento)
        return acumulador;
    }, {});
}
