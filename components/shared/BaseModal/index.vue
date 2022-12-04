<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="close">
        <base-button
          class="close-img"
          variant="transparent"
          button-icon="circle-xmark"
          icon-size="2"
          @clicked="closeModal"/>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
import ModalServices from "~/services/Modal.services";

export default {
  name: "BaseModal",
  components: {
    BaseButton: () => import('~/components/shared/BaseButton')
  },
  methods: {
    closeModal() {
      ModalServices.close(true)
    }
  }
}
</script>

<style scoped lang="scss">

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: var(--color-overlay);
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 60vw;
  margin-top: 10%;
  padding: 6px 0;
  border-radius: 20px;
}

.close {
  margin: 0;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>

