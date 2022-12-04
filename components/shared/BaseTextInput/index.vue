<template>
  <input :type="type"
         :placeholder="placeholder"
         v-model="value"
         class="base-text-field"
         :class="size"
         @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "BaseTextField",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'default'
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    }
  },
  data() {
    return {
      value: '',
    }
  }
}
</script>


<style scoped lang="scss">
.base-text-field {
  padding: 6px 4px;
  border: 1px solid #999999;
  border-radius: 5px;
}

.xl {
  width: 80%;
}

.md {
  width: 50%;
}

.md {
  width: 30%;
}

.xs {
  width: 20%
}
</style>
