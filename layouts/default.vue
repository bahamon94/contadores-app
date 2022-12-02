<template>
  <div id="div-default">
    <HeaderApp/>
    <main>
      <Nuxt />
    </main>
    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
import HeaderApp from '~/components/HeaderApp'

export default {
  name: 'default',
  components: { HeaderApp }
}
</script>

<style lang="scss">


main {
  flex: 1;
  overflow-y: auto;
}

footer {
  background-color: #3f51b5;
}

#div-default {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
