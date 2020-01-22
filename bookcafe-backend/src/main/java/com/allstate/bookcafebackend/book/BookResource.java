package com.allstate.bookcafebackend.book;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" }) //To allow REST API calls from frontend
@RestController // Beans returned are converted to/from JSON/XML.
public class BookResource {
	
	@Autowired // Autowire the BooksHardcodedService so that we can retrieve details from business service.
	private BooksHardcodedService bookManagementService;
	
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return bookManagementService.findAll();
	}
	
	@GetMapping("/books/{id}")
	public Book getCourse(@PathVariable long id) {
		return bookManagementService.findById(id);
	}
	
	@DeleteMapping("/books/{id}")
	  public ResponseEntity<Void> deleteBook( @PathVariable long id) {

	    Book book = bookManagementService.deleteById(id);

	    if (book != null) {
	    	// If Request is successful, return no content back
	      return ResponseEntity.noContent().build();
	    }
	    // If delete failed, return error - resource not found.
	    return ResponseEntity.notFound().build();
	  }
	
	@PutMapping("/books/{id}")
	  public ResponseEntity<Book> updateBook(@PathVariable long id,
	      @RequestBody Book book) {

	    Book bookUpdated = bookManagementService.save(book);

	    return new ResponseEntity<Book>(bookUpdated, HttpStatus.OK);
	  }
	
	@PostMapping("/books")
	  public ResponseEntity<Void> createBook(@RequestBody Book book) {

	    Book createdBook = bookManagementService.save(book);

	    // Location
	    // Get current resource url
	    /// {id}
	    URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
	    		.path("/{id}").buildAndExpand(createdBook.getId()).toUri();

	    return ResponseEntity.created(uri).build();
	  }
	
	// Run application using goal: spring-boot:run

}
