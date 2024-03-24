<template>

  <div class="row mt-5">
    <div class="card">
      <div class="col-md-8 mx-auto">
        <div class="card-header">
          <h4>Edit Students</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="" class="form-label">Name*</label>
            <input type="text" class="form-control" v-model.trim="model.student.name" placeholder="Enter full name">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Course*</label>
            <input type="text" class="form-control" v-model.trim="model.student.course" placeholder="Enter course name">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Phone*</label>
            <input type="text" class="form-control" v-model.trim="model.student.phone" placeholder="Enter phone number">
          </div>
          <div class="mb-3">
            <button @click.prevent="updateStudent()" class="btn btn-primary" type="button">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from "axios";
export default {
  name: 'StudentEdit',
  data(){
    return {
      studentId: '',
      model: {
        student: {
          name: '',
          course: '',
          phone: '',
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
        this.model.student.name = res.data.name
        this.model.student.course = res.data.course
        this.model.student.phone = res.data.phone
      }).catch(function (error){
        alert('something went wrong')
      })
    },
    updateStudent(){
      axios.put(`http://127.0.0.1:8000/api/students/${this.studentId}`, this.model.student).then(res => {
        alert('Data updated successfully')
      }).catch(function (error) {
        alert('Something went wrong')
      })
    }
  }

}
</script>