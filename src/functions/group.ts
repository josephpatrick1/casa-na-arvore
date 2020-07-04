

/*

    Primeito argumento: Array de objetos para fazer o group
    Segundo Argumento: A chave o elemento a ser separado

*/

export const group = function(xs: any, key: any) {
    return xs.reduce(function(rv: any, x: any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

