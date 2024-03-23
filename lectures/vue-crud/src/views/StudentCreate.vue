<template>

  <div class="row mt-5">
    <div class="card">
      <div class="col-md-8 mx-auto">
        <div class="card-header">
          <h4>Add Students</h4>
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
            <button @click.prevent="saveStudent" class="btn btn-primary" type="button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from "axios";
export default {
  name: 'StudentCreate',
  data(){
    return {
      model: {
        student: {
          name: '',
          course: '',
          phone: '',
        }
      }
    }
  },
  methods:{
    saveStudent(){
      axios.post('http://127.0.0.1:8000/api/students', this.model.student)
          .then(res => {
            console.log(res.data);

            this.model.student = {
              name: '',
              course: '',
              phone: ''
            }
            alert('Student added successfully')
        }).catch(function (error){
          alert('something went wrong')
          if (error.response) {
            if (error.response.status === 422) {
              this.errorList = error
            }

          } else if(error.request){

          } else {

          }
      })
    }
  }
}
</script>