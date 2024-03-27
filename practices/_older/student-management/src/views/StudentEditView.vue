<template>
  <div class="row mt-3">
    <div class="col-md-8 mx-auto">
      <div class="card border">
        <div class="card-header">Student Add Form</div>
      </div>
      <div class="card-body min-vh-100 border p-3">
        <div class="mb-2">
          <label for="" class="form-label">Name*</label>
          <input type="text" class="form-control" v-model.trim="model.student.name" placeholder="Enter full name">
        </div>
        <div class="mb-2">
          <label for="" class="form-label">Course*</label>
          <input type="text" class="form-control" v-model.trim="model.student.course" placeholder="Enter course name">
        </div>
        <div class="mb-2">
          <label for="" class="form-label">Phone*</label>
          <input type="text" class="form-control" v-model.trim="model.student.phone" placeholder="Enter phone number">
        </div>
        <div class="mb-2">
          <button class="btn btn-success mt-3" type="button" @click.prevent="updateStudent">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'StudentEditView',
  data(){
    return {
      studentId: '',
      model: {
        student: {
          name: '',
          course: '',
          phone: ''
        }
      }
    }
  },
  mounted() {
    this.studentId = this.$route.params.id
    this.getStudent(this.studentId)
  },
  methods: {
   getStudent(studentId){
     axios.get(`http://127.0.0.1:8000/api/students/${studentId}`).then(res => {
       this.model.student = res.data
     })
   },
    updateStudent(){
     axios.put(`http://127.0.0.1:8000/api/students/${this.studentId}`, this.model.student).then(res => {
       alert('Student Data updated successfully')

     }).catch(function (error) {

     })
    }
  },

}
</script>