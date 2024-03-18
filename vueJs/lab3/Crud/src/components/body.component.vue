<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="student in students"
          :key="student.id"
          class="text-capitalize"
        >
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.city }}</td>
          <td>
            <button
              class="btn btn-warning mx-1"
              data-bs-toggle="modal"
              data-bs-target="#updatemodal"
              @click="updateData(student)"
            >
              Update
            </button>
            <button
              class="btn btn-danger mx-1"
              @click.ctrl="deleteStudent(student.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="4" class="text-center">
            <h3>Total number of students: {{ students.length }}</h3>
          </th>
        </tr>
        <tr>
          <th colspan="4">
            <Add @onStudentAdded="addNewStudent" />
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
                    <!-- student id input -->
                    <div class="form-group m-3 text-start">
                      <label for="studentId">Student ID</label>
                      <input
                        type="text"
                        class="form-control"
                        id="studentId"
                        disabled
                        v-model="studentId"
                      />
                    </div>
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
              @click="updateStudent"
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
    studentId: 0,
    studentName: '',
    studentCity: '',
    students: [],
  }),
  // load the students data in the created hook
  async created() {
    const allStudents = await fetch('http://localhost:5000/students');

    this.students = await allStudents.json();
  },
  methods: {
    async addNewStudent(student) {
      const form = document.querySelector('.needs-validation');

      form.addEventListener('click', () =>
        form.classList.remove('was-validated')
      );
      if (form.checkValidity()) {
        const newStudent = {
          ...student,
          id: +this.students[this.students.length - 1].id + 1,
        };

        // Add new student to the json database server
        await fetch('http://localhost:5000/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStudent),
        });

        this.students.push(newStudent); // update UI

        document.querySelector('.close').click();
      } else {
        form.classList.add('was-validated');
      }
    },
    updateData(student) {
      this.studentId = student.id;
      this.studentName = student.name;
      this.studentCity = student.city;
    },
    async updateStudent() {
      if (this.$refs.form.checkValidity()) {
        const updatedStudent = {
          id: this.studentId,
          name: this.studentName,
          city: this.studentCity,
        };

        // Update the student got with its id and save the new data to the json database server
        await fetch(`http://localhost:5000/students/${this.studentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedStudent),
        });

        // Update student data in the UI
        const student = this.students.find((std) => std.id === this.studentId);
        if (student) {
          student.name = this.studentName;
          student.city = this.studentCity;
        }

        document.querySelector('.cancel').click();
      } else {
        this.$refs.form.classList.add('was-validated');
      }
    },
    async deleteStudent(id) {
      await fetch(`http://localhost:5000/students/${id}`, {
        method: 'DELETE',
      });

      this.students = this.students.filter((std) => std.id !== id);
    },
  },
};
</script>

<style></style>
