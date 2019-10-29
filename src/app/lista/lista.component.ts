import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  isMostrarDados = false;
  clienteSelecionado: any;

  lista = [
    {nome: "Andre", idade: 43, investimento: 30000},
    {nome: "Tati", idade: 28, investimento: 35000},
    {nome: "Vivi", idade: 7, investimento: 10000}
  ];
  constructor() { }

  ngOnInit() {
  }

  exibirDados(cliente) {
    this.clienteSelecionado = cliente;
    this.isMostrarDados = true;
  }

  exibirLista() {
    this.isMostrarDados = false;
  }

}
