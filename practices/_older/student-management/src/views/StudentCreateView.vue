<template>
  <div class="row mt-3">
    <div class="col-md-8 mx-auto">
      <div class="card border">
        <div class="card-header">Student Add Form</div>
      </div>
      <div class="card-body vh-100 border p-3">
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
          <button class="btn btn-success mt-3" type="button" @click.prevent="saveStudent">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'StudentCreateView',
  data(){
    return {
      model: {
        student: {
          name: '',
          course: '',
          phone: ''
        }
      }
    }
  },
  methods: {
    saveStudent(){
      axios.post('http://127.0.0.1:8000/api/students', this.model.student).then(res => {
        alert('Student Created successfully')
        this.model.student.name = ''
        this.model.student.course = ''
        this.model.student.phone = ''
      }).catch(function (error) {
        alert('Something went wrong')
      })
    }
  },
  mounted() {

  }
}
</script>