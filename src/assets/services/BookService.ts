import axios from 'axios';
import { urlBooks } from "../endpoints";
import { Book } from '../types';

export const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get(urlBooks);
    if(response.status==200 && response.data){
        const libraryBooks = response.data.default.library.map((item: any) => item.book);
        return libraryBooks ;

    } 
    return [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};