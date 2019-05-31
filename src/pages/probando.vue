<template>
  <q-page padding class="" style="height: 50px">
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered>
        <q-item
          clickable
          v-ripple
          v-for="post in posts" :key="post.data.id"
        >
          <q-item-section avatar>
            <q-avatar size="70px">
              <img src="post.data.thumbnail">
            </q-avatar>
          </q-item-section>
          <q-item-section>{{ post.data.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Probando',
  created () {
    this.$axios.get('https://www.reddit.com/r/aww.json?raw_jason=1')
      .then(response => {
        this.posts = response.data.data.children
      })
      .catch(error => {
        console.log(error)
      })
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>
