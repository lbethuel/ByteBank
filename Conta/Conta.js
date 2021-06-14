export class Conta{

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente")
        }
     }
     //Método abstrado
     sacar(valor){
         throw new Error("O método Sacar da conta é abstrato")
     }

     _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valorSacado;
        }
        return 0;
     }
 
     depositar(valor){
             this._saldo += valor;
     }
 
     tranferir(valor, conta){
         const valorSacado = this.sacar(valor);
         conta.depositar(valorSacado);
     }
}