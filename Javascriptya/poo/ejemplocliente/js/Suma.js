function suma(valor1,valor2){
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.depositar = depositar;
    this.extraer=extraer;
}
function depositar(dinero){
    this.saldo = this.saldo + dinero;
}
function extraer(dinero){
     this.saldo = this.saldo-dinero;
}
