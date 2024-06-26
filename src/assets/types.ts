
export interface Author {
name: string;
otherBooks: string[];
}
  
export interface Book {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
}
export interface BookCardProps {
    book:Book
}
export interface ReadingListState {
    books: Book[];
  }
  
