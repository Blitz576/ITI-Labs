<template>
  <div>
    <button
      class="btn btn-primary w-100 my-2 fs-5"
      data-bs-toggle="modal"
      data-bs-target="#static"
    >
      Add Student
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
            <h5 class="modal-title">Add New Student</h5>
            <button
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="row w-100">
              <form class="needs-validation" novalidate>
                <div class="card p-2 mt-2">
                  <div class="row input-group has-validation">
                    <!-- student name input -->
                    <div class="form-group m-3 text-start">
                      <label for="studentname">Student name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="studentname"
                        required
                        v-model="studentName"
                        pattern="[a-zA-Z0-9.\s]+"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid student name.
                      </div>
                    </div>

                    <!-- City name input -->
                    <div class="form-group m-3 text-start">
                      <label for="cityname">City name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cityname"
                        required
                        v-model="studentCity"
                        pattern="[a-zA-Z\s]+"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid city name.
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="modal-footer d-flex justify-content-center">
            <button
              @click="addStudent"
              class="btn btn-primary"
              data-bs-dismiss=""
            >
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
    studentId: 0,
    studentName: '',
    studentCity: '',
  }),
  methods: {
    addStudent() {
      const student = {
        id: this.studentId,
        name: this.studentName,
        city: this.studentCity,
      };

      this.$emit('onStudentAdded', student);

      this.resetData();
    },
    resetData() {
      this.studentId = 0;
      this.studentName = '';
      this.studentCity = '';
    },
  },
};
</script>

<style></style>
