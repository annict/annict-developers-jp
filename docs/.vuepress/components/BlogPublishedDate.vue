<template>
  <div class="published-on">
    {{ publishedOn | formatDate }}
  </div>
</template>


<script>
export default {
  computed: {
    publishedOn() {
      return this.$frontmatter.publishedOn
    }
  },

  filters: {
    formatDate(str) {
      return new Date(str).toLocaleDateString()
    }
  }
}
</script>

<style lang="stylus">
.published-on
  color #4e6e8e
  margin-top -0.5rem
</style>
