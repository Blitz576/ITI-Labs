<template>
  <div>
    <button
      class="btn btn-primary w-100 my-2 fs-5"
      data-bs-toggle="modal"
      data-bs-target="#static"
    >
      Add Book
    </button>
    <div
      class="modal fade"
      id="static"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Book</h5>
            <button
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="row w-100">
              <form class="needs-validation create" novalidate>
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
                        required
                        pattern="[0-9]{13}"
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
                        min="1"
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

          <div class="modal-footer d-flex justify-content-center">
            <button @click="addBook" class="btn btn-primary" data-bs-dismiss="">
              Add
            </button>
            <button class="btn btn-danger close" data-bs-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
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
  }),
  methods: {
    addBook() {
      const book = {
        ISBN: this.bookISBN,
        name: this.bookName,
        category: this.category,
        pages: this.pages,
        price: this.price,
        author: this.authorName,
        stock: this.stock,
      };

      this.$emit('onBookAdded', book);

      this.resetData();
    },
    resetData() {
      this.bookISBN = '';
      this.bookName = '';
      this.authorName = '';
      this.category = '';
      this.price = '';
      this.pages = '';
      this.stock = '';
    },
  },
};
</script>

<style></style>
