import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  estaAutenticado : boolean = true;
  menus : any = [
    {rota: 'calcular-media', titulo: 'Calcular Média' },
    {rota: 'calculadora', titulo: 'Calculadora' },
    {rota: 'cadastro-aluno', titulo: 'Cadastrar Aluno' },
    {rota: 'apolice-seguro', titulo: 'Apólice de Seguro' },
    {rota: 'pai', titulo: 'Rota Aninhada' }  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
