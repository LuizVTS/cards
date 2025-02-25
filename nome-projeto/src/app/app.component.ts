import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  cards = [
    {
      titulo: 'Montanhas Nevadas',
      descricao: 'Uma bela paisagem de montanhas cobertas de neve.',
      imagem: 'https://source.unsplash.com/400x200/?mountain,snow',
      curtidas: 0
    },
    {
      titulo: 'Praia Paradisíaca',
      descricao: 'Areia branca e um mar azul cristalino.',
      imagem: 'https://source.unsplash.com/400x200/?beach',
      curtidas: 0
    },
    {
      titulo: 'Floresta Encantada',
      descricao: 'Caminho misterioso por entre as árvores.',
      imagem: 'https://source.unsplash.com/400x200/?forest',
      curtidas: 0
    }
  ];

  curtir(index: number) {
    this.cards[index].curtidas++;
    console.log(`Post ${this.cards[index].titulo} curtido! Total: ${this.cards[index].curtidas}`);
  }

  compartilhar(index: number) {
    alert(`Você compartilhou: ${this.cards[index].titulo}`);
  }
}
