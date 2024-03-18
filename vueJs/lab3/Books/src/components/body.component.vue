<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Name</th>
          <th>Author</th>
          <th>Category</th>
          <th>Pages</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.ISBN" class="text-capitalize">
          <td>{{ book.ISBN }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.category }}</td>
          <td>{{ book.pages }}</td>
          <td>{{ formattedPrice(book.price) }}</td>
          <td>{{ book.stock }}</td>
          <td>
            <button
              class="btn btn-success my-1"
              data-bs-toggle="modal"
              data-bs-target="#updatemodal"
              @click="updateData(book)"
            >
              Update
            </button>
            <button class="btn btn-danger" @click.ctrl="deleteBook(book.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8" class="text-center">
            <h3>Total number of books: {{ books.length }}</h3>
          </th>
        </tr>
        <tr>
          <th colspan="8">
            <Add @onBookAdded="addNewBook" />
          </th>
        </tr>
      </tfoot>
    </table>

    <!-- Modal for updating -->
    <div
      class="modal fade"
      id="updatemodal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Updating....</h5>
            <button
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="row w-100">
              <form class="needs-validation" ref="form" novalidate>
                <div class="card p-2 mt-2">
                  <div class="row input-group has-validation">
                    <!-- ISBN input -->
                    <div class="form-group m-3 text-start">
                      <label for="isbn" class="form-label">ISBN</label>
                      <input
                        type="text"
                        class="form-control"
                        id="isbn"
                        v-model="bookISBN"
                        disabled
                      />
                      <div class="invalid-feedback">
                        Please enter a valid book ISBN.
                      </div>
                    </div>

                    <!-- Book name input -->
                    <div class="form-group m-3 text-start">
                      <label for="bookname">Book name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="bookname"
                        required
                        v-model="bookName"
                        pattern="[a-zA-Z0-9.\s]+"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid book name.
                      </div>
                    </div>

                    <!-- Author name input -->
                    <div class="form-group m-3 text-start">
                      <label for="authorname">Author name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="authorname"
                        required
                        v-model="authorName"
                        pattern="[a-zA-Z\s]+"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid author name.
                      </div>
                    </div>

                    <!-- Category Select -->
                    <div class="form-group m-3 text-start">
                      <label class="form-label">Category</label>
                      <select
                        name="category"
                        class="form-select"
                        required
                        v-model="category"
                      >
                        <option disabled value="">Select Category</option>
                        <option
                          v-for="cat in bookCategory"
                          :value="cat"
                          :key="cat"
                        >
                          {{ cat }}
                        </option>
                      </select>
                      <div class="invalid-feedback">
                        Please choose the book category.
                      </div>
                    </div>

                    <!-- Pages number input -->
                    <div class="form-group m-3 text-start">
                      <label for="pages" class="form-label"
                        >Number of Pages</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="pages"
                        v-model="pages"
                        required
                        min="1"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid number of book pages.
                      </div>
                    </div>

                    <!-- Price number input -->
                    <div class="form-group m-3 text-start">
                      <label for="price" class="form-label">Price</label>
                      <input
                        type="number"
                        class="form-control"
                        id="price"
                        v-model="price"
                        required
                        min="1"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid book price.
                      </div>
                    </div>

                    <!-- Stock number input -->
                    <div class="form-group m-3 text-start">
                      <label for="stock" class="form-label">Stock</label>
                      <input
                        type="number"
                        class="form-control"
                        id="stock"
                        v-model="stock"
                        required
                        min="0"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid book stock.
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="modal-footer d-flex flex-nowrap justify-content-center">
            <button
              @click="updateBook"
              class="btn btn-primary"
              data-bs-dismiss=""
            >
              Update
            </button>
            <button class="btn btn-danger cancel" data-bs-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import students from '../students';
import Add from './add.component.vue';
export default {
  components: {
    Add,
  },
  data: () => ({
    bookId: '',
    bookISBN: '',
    bookName: '',
    authorName: '',
    category: '',
    price: '',
    pages: '',
    stock: '',
    bookCategory: [
      'Frontend',
      'Backend',
      'AI',
      'Embedded Systems',
      'Networking',
      'Data Science',
    ],
    books: [],
  }),
  // load the books data in the created hook
  async created() {
    const allBooks = await fetch('http://localhost:3000/books');

    this.books = await allBooks.json();
  },
  methods: {
    async addNewBook(book) {
      const form = document.querySelector('.create');

      form.addEventListener('click', () =>
        form.classList.remove('was-validated')
      );
      if (form.checkValidity()) {
        // Add new book to the json database server
        await fetch('http://localhost:3000/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(book),
        });

        this.books.push(book); // update UI

        document.querySelector('.close').click();
      } else {
        form.classList.add('was-validated');
      }
    },
    updateData(book) {
      this.bookId = book.id;
      this.bookISBN = book.ISBN;
      this.bookName = book.name;
      this.authorName = book.author;
      this.category = book.category;
      this.price = book.price;
      this.pages = book.pages;
      this.stock = book.stock;
    },
    async updateBook() {
      if (this.$refs.form.checkValidity()) {
        const updatedBook = {
          name: this.bookName,
          author: this.authorName,
          category: this.category,
          price: this.price,
          pages: this.pages,
          stock: this.stock,
        };

        // Update the student got with its id and save the new data to the json database server
        await fetch(`http://localhost:3000/books/${this.bookId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedBook),
        });

        // Update student data in the UI
        const book = this.books.find((b) => b.id === this.bookId);
        if (book) {
          book.name = this.bookName;
          book.author = this.authorName;
          book.category = this.category;
          book.price = this.price;
          book.pages = this.pages;
          book.stock = this.stock;
        }

        document.querySelector('.cancel').click();
      } else {
        this.$refs.form.classList.add('was-validated');
      }
    },
    async deleteBook(id) {
      await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
      });

      this.books = this.books.filter((b) => b.id !== id);
    },
    formattedPrice(value) {
      return Intl.NumberFormat('en-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
};
</script>

<style></style>
