import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  ra : number;
  nome : Text;
  email : Text;
  celular : number;  
  media : number;

  constructor(public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.ra = this.route.snapshot.params['ra'] ? parseFloat(this.route.snapshot.params['ra']) : 0; 
    this.nome = this.route.snapshot.params['nome'] ? this.route.snapshot.params['nome'] : 0;
    this.email = this.route.snapshot.params['email'] ? this.route.snapshot.params['email'] : 0;
    this.celular = this.route.snapshot.params['celular'] ? parseFloat(this.route.snapshot.params['celular']) : 0;    
  }
}