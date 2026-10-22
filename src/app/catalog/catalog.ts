import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {  
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FormsModule], // Pas besoin d'importer NgIf/NgFor avec la nouvelle syntaxe @if/@for
  templateUrl: './catalog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './catalog.css'
})

export class Catalog {
   filterStock: string = 'all';
   totalPrice: number = 0;

   getFilteredBooks() {
    if (this.filterStock === 'all') {
        return this.books;
    }


    const isStock = this.filterStock === 'inStock';
    return this.books.filter(book => (book.quantity > 0) === isStock);
}

  // La liste des données (Mock)
  books = [
    {
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      price: 20,
      image: 'First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
      quantity: 5
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 15,
      image: 'Harry_Potter_Book_Cover.jpg',
      quantity: 0
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      price: 12,
      image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
      quantity: 8
    }
  ];

  panier: Book[] = [];

  // La méthode déclenchée au clic
  buyBook(book: Book) {
   // alert(`Merci pour votre achat de : ${book.title}`);
    this.panier.push(book);
    this.totalPrice += book.price;
    book.quantity--;
  }

  videPanier() {
    for (let book of this.panier) { // Remettre en stock les livres du panier
      book.quantity++;
    };
    this.panier = []; // Vider le panier
    this.totalPrice = 0; // Réinitialiser le prix total
  }

  incrementeStock(book: Book) {
    book.quantity++;
  }

  decrementeStock(book: Book) { 
    if (book.quantity > 0) {
      book.quantity--;
    }
  } 

}
