import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css'],
})
export class BarraPesquisaComponent implements OnInit {
  descricao = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.descricao);
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }
    this.router.navigate(['produtos']);
    console.log(this.descricao);
  }
}
