<template>
  <button
    @click="clicked"
    class="base-button"
    :class="[disabled ? 'button-disable' : variant  ]"
  >
    {{ text }}
    <slot v-show="ButtonIcon" name="icon">
      <base-icon :icon="ButtonIcon" :size="IconSize"/>
    </slot>
  </button>
</template>

<script>

export default {
  name: "BaseButton",
  components: {
    BaseIcon: () => import('~/components/shared/BaseIcon')
  },

  props: {
    text: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
      default: 'danger'
    },
    ButtonIcon: {
      type: String,
      required: false,
      default: ''
    },
    IconSize: {
      type: String,
      required: false,
      default: '1'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped lang="scss">
.base-button {
  background-color: var(--color-light);
  border: none;
  border-radius: 25px;
  color: var(--color-normal);
  cursor: pointer;
  padding: 4px 14px;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  height: 50%;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: var(--color-gray);
    box-shadow: 0 1px 5px var(--color-gray);
    color: var(--color-light);
  }
}

.danger-light {
  background-color: var(--color-light);
  color: var(--color-conditional-down);

  &:hover {
    background-color: var(--color-conditional);
    box-shadow: 0 1px 5px var(--color-gray);
  }
}

.success {
  background-color: var(--color-primary);
  color: var(--color-light);

  &:hover {
    background-color: var(--color-primary);
    box-shadow: 0 1px 5px var(--color-gray);
  }
}

.success-light {
  background-color: var(--color-light);
  color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    box-shadow: 0 1px 5px var(--color-gray);
  }
}

.transparent-danger {
  background-color: transparent;
  color: var(--color-neutral);

  &:hover {
    background-color: transparent;
    box-shadow: none;
    color:  var(--color-conditional);

  }
}

.transparent {
  background-color: transparent;
  color: var(--color-neutral);

  &:hover {
    background-color: transparent;
    box-shadow: none;
    color:  var(--color-neutral);

  }
}

.button-disable {
  pointer-events: none;
  color: var(--color-neutral)
}

</style>
