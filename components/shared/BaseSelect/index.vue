<template>
  <div class="container">
    <button @click="isActive = !isActive" class="select" name="select" value="options">{{ optionsLabel}}</button>
    <div
      class="options"
      :class="{ active: isActive }"
    >
      <p
        v-for="option in options"
        :key="option.value"
        class="item active"
        @click="selectOption(option)"
      > {{ option.label }}
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      isActive: false,
      selected: ''
    }
  },
 methods: {
   selectOption({ label, value }) {
     this.selected = label
     this.isActive = !this.isActive
     this.$emit('selected', value)
   }
 },
  computed: {
    optionsLabel () {
      return this.selected ? this.selected : this.placeholder
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.select {
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;
  text-transform: capitalize;
  color: var(--color-normal);
  background: var(--color-light);
  text-align: left;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.select::after {
  content: '';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  border-right: 2px solid var(--color-normal);
  border-bottom: 2px solid var(--color-normal);
}

.select:hover {
  background: var(--color-light);
  color: var(--color-normal);
}

.select.active {
  background: var(--color-normal);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.options {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: fit-content;
  background: var(--color-neutral);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display: none;
}

.options.active {
  display: block;
}

.options .item {
  color: var(--color-light);
  text-transform: capitalize;
  width: 100%;
  height: 30px;
  padding: 0 15px;
  line-height: 30px;
  cursor: pointer;
}

.options .item.active {
  background: var(--color-neutral);
}
</style>
