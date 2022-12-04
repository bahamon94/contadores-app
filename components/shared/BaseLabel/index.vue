<template>
  <label class="text-start">{{ text }}</label>
</template>

<script>
export default {
  name: "BaseLabel",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
