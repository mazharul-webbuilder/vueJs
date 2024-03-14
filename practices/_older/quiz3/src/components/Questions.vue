<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar" :style="{width: `${(questionsAnswered / questions.length) * 100}%`}"></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div class="single-question" v-for="(question, index) in questions" :key="question.q" v-show="questionsAnswered === index">
      <div class="question" >{{question.q}}</div>
      <div class="answers">
        <div class="answer" v-for="answer in question.answers" :key="answer.text" @click.prevent="answerSelect(answer.is_correct)">
          {{answer.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionsComponent",
  props: ['questions', 'questionsAnswered'],
  emits: ['question-answered'],
  methods: {
    answerSelect(is_correct){
      this.$emit('question-answered', is_correct)
    }
  }
}
</script>