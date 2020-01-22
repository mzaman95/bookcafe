package com.allstate.bookcafebackend.book;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BooksHardcodedService {
	
	private static List<Book> books = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		books.add(new Book(++idCounter, "Little Women", "Louisa May Alcott","Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War."));
	    books.add(new Book(++idCounter, "Pride and Prejudice", "Jane Austen","Pride and Prejudice—Austen's own 'darling child'—tells the story of fiercely independent Elizabeth Bennet, one of five sisters who must marry rich, as she confounds the arrogant, wealthy Mr. Darcy. What ensues is one of the most delightful and engrossingly readable courtships known to literature, written by a precocious Austen when she was just twenty-one years old."));
	    books.add(new Book(++idCounter, "Frankenstein", "Jane Austen","At once a Gothic thriller, a passionate romance, and a cautionary tale about the dangers of science, Frankenstein tells the story of committed science student Victor Frankenstein. "));
	    books.add(new Book(++idCounter, "The Scarlet Letter", "Nathaniel Hawthorne","America’s first psychological novel, Nathaniel Hawthorne’s The Scarlet Letter is a dark tale of love, crime, and revenge set in colonial New England."));
	    books.add(new Book(++idCounter, "A Tale of Two Cities", "Charles Dickens","From the storming of the Bastille to the relentless drop of the guillotine, Dickens vividly captures the terror and upheaval of that tumultuous period. "));
	  }
	
	public List<Book> findAll(){
		return books;
	}
	
	public Book deleteById(long id) {
		Book book = findById(id);
		
		if(book == null)
			return null;
		
		if(books.remove(book)) {
			return book;
		}
		
		return null;
	}

	public Book findById(long id) {
		for (Book book : books) {
			if(book.getId() == id) {
				return book;
			}
		}
		return null;
	}
	
	public Book save(Book book) {
		if(book.getId() == -1 || book.getId()== 0) {
			book.setId(++idCounter);
			books.add(book);
		} else {
			deleteById(book.getId());
			books.add(book);
		}
		return book;
	}

}
