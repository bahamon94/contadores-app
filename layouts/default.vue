<template>
  <div id="div-default">
    <component :is="modalComponent" :input="inputObj"/>
    <HeaderApp/>
    <main>
      <Nuxt/>
    </main>
    <FooterApp/>
  </div>
</template>

<script>
import HeaderApp from '~/components/HeaderApp'
import FooterApp from "~/components/FooterApp";
import ModalServices from "~/services/Modal.services";

export default {
  name: 'default',
  components: {FooterApp, HeaderApp},
  data() {
    return {
      modalComponent: null,
      inputObj: {}
    }
  },
  created() {
    this.onListenModal()
  },
  methods: {
    onListenModal() {
      ModalServices.nvg$.subscribe(res => {
        if (res) {
          this.modalComponent = res.component
          this.inputObj = res.inputObj
        }
      })
    }
  }
}
</script>

<style lang="scss">
main {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

#div-default {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
