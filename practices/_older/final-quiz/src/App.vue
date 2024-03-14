<template>
  <div class="ctr">
    <questions
        v-if="questionsAnswered !== questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
    />
    <div v-else>
      <result
          :results="results"
          :totalCorrect="totalCorrect"
      />
      <button type="button" class="reset-btn" @click.prevent="reset">Reset</button>
    </div>
  </div></template>

<script>
import Questions from "@/components/Questions.vue";
import Result from "@/components/Result.vue";
export default {
  name: "App",
  components: {
    Questions,
    Result
  },
  methods: {
    questionAnswered(is_correct){
      if (is_correct) {
        this.totalCorrect++
      }
      this.questionsAnswered++
    },
    reset(){
      this.totalCorrect = 0
      this.questionsAnswered = 0
    }
  },
  data(){
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      questions: [
        {
          q: "What is the capital of France?",
          answers: [
            { text: "Paris", is_correct: true },
            { text: "Berlin", is_correct: false },
            { text: "Madrid", is_correct: false },
            { text: "Rome", is_correct: false },
          ]
        },
        {
          q: "Which planet is known as the Red Planet?",
          answers: [
            { text: "Earth", is_correct: false },
            { text: "Mars", is_correct: true },
            { text: "Venus", is_correct: false },
            { text: "Jupiter", is_correct: false },
          ]
        },
        {
          q: "Who wrote the play 'Romeo and Juliet'?",
          answers: [
            { text: "Charles Dickens", is_correct: false },
            { text: "William Shakespeare", is_correct: true },
            { text: "Jane Austen", is_correct: false },
            { text: "Mark Twain", is_correct: false },
          ]
        },
        {
          q: "What is the largest mammal in the world?",
          answers: [
            { text: "Elephant", is_correct: false },
            { text: "Blue Whale", is_correct: true },
            { text: "Giraffe", is_correct: false },
            { text: "Polar Bear", is_correct: false },
          ]
        },
        {
          q: "In which year did the Titanic sink?",
          answers: [
            { text: "1912", is_correct: true },
            { text: "1905", is_correct: false },
            { text: "1925", is_correct: false },
            { text: "1930", is_correct: false },
          ]
        },
        {
          q: "Who painted the Mona Lisa?",
          answers: [
            { text: "Vincent van Gogh", is_correct: false },
            { text: "Leonardo da Vinci", is_correct: true },
            { text: "Pablo Picasso", is_correct: false },
            { text: "Michelangelo", is_correct: false },
          ]
        },
        {
          q: "What is the capital of Japan?",
          answers: [
            { text: "Seoul", is_correct: false },
            { text: "Beijing", is_correct: false },
            { text: "Tokyo", is_correct: true },
            { text: "Bangkok", is_correct: false },
          ]
        },
        {
          q: "Which gas do plants absorb from the atmosphere?",
          answers: [
            { text: "Oxygen", is_correct: false },
            { text: "Carbon Dioxide", is_correct: true },
            { text: "Nitrogen", is_correct: false },
            { text: "Hydrogen", is_correct: false },
          ]
        },
        {
          q: "Who is the author of 'To Kill a Mockingbird'?",
          answers: [
            { text: "Harper Lee", is_correct: true },
            { text: "J.K. Rowling", is_correct: false },
            { text: "George Orwell", is_correct: false },
            { text: "Ernest Hemingway", is_correct: false },
          ]
        },
        {
          q: "What is the square root of 144?",
          answers: [
            { text: "10", is_correct: false },
            { text: "12", is_correct: true },
            { text: "14", is_correct: false },
            { text: "16", is_correct: false },
          ]
        },
      ],
      results: [
        {
          min: 0,
          max: 2,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!"
        },
        {
          min: 5,
          max: 8,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!"
        }
      ]
    }
  },

}
</script>