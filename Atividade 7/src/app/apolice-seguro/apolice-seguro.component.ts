import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent implements OnInit {
  nome : String;
  sexo : String;
  idade : number;  
  valor : number;
  final : number;

  constructor(public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.nome = this.route.snapshot.params['nome'] ? this.route.snapshot.params['nome'] : 0;
    this.sexo = this.route.snapshot.params['sexo'] ? this.route.snapshot.params['sexo'] : 0;
    this.idade = this.route.snapshot.params['idade'] ? parseFloat(this.route.snapshot.params['idade']) : 0;
    this.valor = this.route.snapshot.params['valor'] ? parseFloat(this.route.snapshot.params['valor']) : 0;
  }

  calcular(){
    if(this.sexo == "Masculino" || this.sexo == "masculino" || this.sexo == "MASCULINO"){
      if (this.idade <= 25){
        this.final = (this.valor*0.15);
      }
      else{
        this.final = (this.valor*0.10);
      }        
    }

    else if(this.sexo == "Feminino" || this.sexo == "feminino" || this.sexo == "FEMININO"){
      this.final = (this.valor*0.08);
    }
  }
}