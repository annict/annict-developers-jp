<template>
  <ul>
    <li v-for="page in pages">
      <div>{{ formatDate(page.frontmatter.publishedOn) }}</div>
      <a :href="page.path">{{ page.title }}</a>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    limit: {
      type: Number,
      default: -1
    }
  },

  data() {
    return {
      pages: []
    }
  },

  created() {
    this.pages = this.$site.pages.filter(page => {
      return page.regularPath.match(/\/blog\/_posts\//)
    }).sort((page1, page2) => {
      if (page1.path < page2.path) {
        return -1
      } else if (page1.path > page2.path) {
        return 1
      } else {
        return 0
      }
    }).reverse()

    if (this.limit !== -1) {
      this.pages = this.pages.slice(0, this.limit)
    }
  },

  methods: {
    formatDate(str) {
      return new Date(str).toLocaleDateString()
    }
  }
}
</script>

<style lang="stylus">
ul
  padding-left 0
  list-style-type none

  li
    margin-bottom .8rem
</style>
