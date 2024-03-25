<template>
  <div class="">
    <div class="card mt-2">
      <div class="card-header">
        <h4>Students
          <RouterLink to="/student/create" class="btn btn-primary float-end">Add Student</RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Created AT</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody v-if="students.length > 0">
          <tr v-for="(student, index) in students" :key="index">
            <td>{{student.id}}</td>
            <td>{{student.name}}</td>
            <td>{{student.course}}</td>
            <td>{{student.phone}}</td>
            <td>{{student.created_at_mod}}</td>
            <td>
              <RouterLink :to="{name: 'student.edit', params: {id: student.id}}" class="btn btn-success ">Edit</RouterLink>
              <button type="button" @click.prevent="deleteStudent(student.id)" class="btn btn-danger ">Delete</button>
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td colspan="6" class="text-black">Data is loading.....</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'StudentView',
  data(){
    return{
      students: [],
    }
  },
  mounted() {
    this.getStudents()
  },
  methods: {
    getStudents(){
      axios.get('http://127.0.0.1:8000/api/students').then(res => {
        this.students = res.data
      })
    },
    deleteStudent(studentId) {
      if (confirm('Are you sure, you want to delete this data?')) {
        axios.delete(`http://127.0.0.1:8000/api/students/${studentId}`).then(res => {
          this.getStudents()
        }).catch(function (error) {

        })
      }
    }
  },

}
</script>