

class CalcSalario{

    constructor(salario){

        if (this.isNum = !Number.isInteger(salario)) {

            this.message = "Coloque um valor numérico no campo.";
            const m = document.querySelector(".message");
            m.style.display = "flex";
            m.innerHTML = this.message;
            return;

        }

        if (this.message != "") {
            document.querySelector(".message").style.display = 'none';
        }

        this.salario = salario;

        this.fgtsSalario = this.salario * 0.08;
        
        this.ferias = this.salario / 12;
        this.adicionalFerias = this.ferias / 3;
        this.fgtsFeriasAdicional = ((this.ferias + this.adicionalFerias) * 0.08);
        this.salario13 = (this.salario / 12);
        console.log(this.salario13)
        this.fgts13salario = (this.salario13 * 0.08);
        this.avisoPrevio = this.salario / 12;
        this.fgtsAvisoPrevio = (this.avisoPrevio * 0.08);
        this.multaFgts = ((this.fgtsSalario + this.fgtsFeriasAdicional + this.fgts13salario + this.fgtsAvisoPrevio ) * 0.5);
        this.total = (this.ferias + this.adicionalFerias + this.fgtsFeriasAdicional + this.salario13 + this.fgts13salario + this.avisoPrevio + this.fgtsAvisoPrevio + this.multaFgts);

    }

    _resultProvisoes(){

        if (!this.isNum) {

            const results = document.querySelectorAll(".result");

            results[0].innerHTML = this.ferias.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[1].innerHTML = this.adicionalFerias.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[2].innerHTML = this.fgtsFeriasAdicional.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[3].innerHTML = this.salario13.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[4].innerHTML = this.fgts13salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[5].innerHTML = this.avisoPrevio.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[6].innerHTML = this.fgtsAvisoPrevio.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[7].innerHTML = this.multaFgts.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            results[8].innerHTML = this.total.toLocaleString('pt-br', {style:'currency', currency:'BRL'});

            return this.total;

        }

        

    }

}

