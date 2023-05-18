import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';
import { produtos } from 'src/app/produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  adicionarCarrinho(produtoId: IProdutoCarrinho) {
    this.itens.push(produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter((item) => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify((this.itens = [])));
    localStorage.clear;
  }
}
