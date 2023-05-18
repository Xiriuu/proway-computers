import { Component } from '@angular/core';
import { ProdutosService } from './../../produtos.service';
import { IProduto, IProdutoCarrinho, produtos } from 'src/app/produtos';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NotificacaoService } from './../../notificacao.service';
import { CarrinhoService } from './../../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent {
  produto: IProduto | undefined;
  quantidade = 1;
  // quantidadeEstoque: number;

  constructor(
    private ProdutosService: ProdutosService,
    private route: ActivatedRoute,
    private NotificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.ProdutosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.NotificacaoService.notificar('O produto foi adicionado ao carrinho');
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarCarrinho(produto);
  }
}
