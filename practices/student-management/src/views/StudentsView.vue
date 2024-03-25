<template>
  <div class="row mt-3">
    <div class="col mx-auto">
      <div class="card">
        <div class="card-header">
          <h4>Students <router-link type="button" class="btn-primary btn float-end" to="/student/create">Add Student</router-link></h4>
        </div>
        <div class="card-body">
          <table class="table-bordered table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Phone</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student in students" :key="student.id" v-if="students.length > 0">
              <td>{{student.id}}</td>
              <td>{{student.name}}</td>
              <td>{{student.course}}</td>
              <td>{{student.phone}}</td>
              <td>{{student.created_at_mod}}</td>
              <td>
                <router-link :to="{name: 'student.edit', params: {id: student.id}}" class="btn btn-success">Edit</router-link>
                <button class="btn btn-danger float-end" @click.prevent="deleteStudent(student.id)">Delete</button>
              </td>
            </tr>
            <p v-else class="text-secondary text-center py-2">Data is loading......</p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentView",
  data(){
    return{
      students: []
    }
  },
  mounted() {
    this.getStudents()
  },
  methods: {
    getStudents(){
      axios.get('http://127.0.0.1:8000/api/students').then(res => {
        this.students = res.data
      }).catch(function (error) {

      })
    },
    deleteStudent(studentId) {
      if (confirm('Are you sure, You want to delete this?')) {
        axios.delete(`http://127.0.0.1:8000/api/students/${studentId}`).then(res => {
          this.getStudents()
        })
      }
    }
  }
}
</script>