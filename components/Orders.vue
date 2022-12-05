<template>
  <div class="container">
    <BaseTextInput  v-model="filter" class="filter-input" type="radio" id="All" text="All" />
    <BaseTextInput v-model="filter" class="filter-input" type="radio" id="CSS" text="CSS" />

    <ol class="filters">
      <li>
        <BaseButton
          class="list-filter"
          :variant="isAscendent"
          text="Asc"
          @clicked="setOrder('asc')"
        />
      </li>
      <li>
        <BaseButton
          class="list-filter"
          :variant="isDescendent"
          text="Desc"
          @clicked="setOrder('desc')"
        />
      </li>
    </ol>
    <hr>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Filters",
  components: {
    BaseTextInput: () => import('~/components/shared/BaseTextInput'),
    BaseButton: () => import('~/components/shared/BaseButton')
  },
  data() {
    return {
      filter: ''
    }
  },
  computed: {
    isAscendent () {
      return this.filter.includes('asc') ? 'success' : 'default'
    },
    isDescendent () {
      return this.filter.includes('desc') ? 'success' : 'default'
    }
  },
  methods: {
    setOrder(order) {
      this.filter = order
      this.setWay(order)
    },

    ...mapMutations({ setWay: "counter/setOrder" })
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
}

.filter-input {
  position: absolute;
  display: none;
}

.filters {
  text-align: center;
  padding: .5rem 1rem;
}

.filters * {
  display: inline-block;
}

.filters .list-filter {
  padding: 0.5rem 1rem;
  margin-bottom: 0.25rem;
  border-radius: 2rem;
  min-width: 50px;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  transition: all 0.1s;
}

.filters .list-filter:hover {
  background: var(--color-primary);
  color: var(--color-light);
}

.active {
  background: var(--color-primary);
  color: var(--color-light);
}

</style>
