<template>
  <label>
    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
    <div class="alert" :class="hasError.type">
      <span @click="closeAlert" class="alertClose">X</span>
      <span class="alertText">
        {{ hasError.label }}
      </span>
    </div>
  </label>

</template>

<script>
import {mapGetters} from "vuex";
import modalServices from "~/services/Modal.services";

export default {
  name: "BaseAlerts",
  computed: {
    ...mapGetters({ hasError: "error" })
  },
  methods:{
    closeAlert() {
      modalServices.close()
    }
  }

}
</script>

<style scoped>
.alert {
  position: absolute;
  right: 0;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  cursor: hand;
  font-family: sans-serif;
  font-weight: 400;
  width: 25%;
}

.alertCheckbox {
  display: none;
}

:checked + .alert {
  display: none;
}

.alertText {
  display: table;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
}

.alertClose {
  float: right;
  padding-top: 5px;
  font-size: 10px;
}

.clear {
  clear: both;
}

.info {
  background-color: #EEE;
  border: 1px solid #DDD;
  color: #999;
}

.success {
  background-color: #EFE;
  border: 1px solid #DED;
  color: #9A9;
}

.notice {
  background-color: #EFF;
  border: 1px solid #DEE;
  color: #9AA;
}

.warning {
  background-color: #FDF7DF;
  border: 1px solid #FEEC6F;
  color: #C9971C;
}

.error {
  background-color: #FEE;
  border: 1px solid #EDD;
  color: #A66;
}

</style>
