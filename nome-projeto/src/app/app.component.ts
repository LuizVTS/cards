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
      imagem: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg',
      curtidas: 0
    },
    {
      titulo: 'Praia Paradisíaca',
      descricao: 'Areia branca e um mar azul cristalino.',
      imagem: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
      curtidas: 0
    },
    {
      titulo: 'Floresta Encantada',
      descricao: 'Caminho misterioso por entre as árvores.',
      imagem: 'https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg',
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
