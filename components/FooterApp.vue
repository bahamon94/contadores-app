<template>
  <footer class="site-footer">
      <div class="content">
        <div>
          <p class="app-name-text">CountersApp
          </p>
        </div>

        <div>
          <ul class="total-counters">
            <BaseLabel text="Total Counters" class="legend" />
            <li><span> {{ countCounters }} </span></li>

          </ul>
        </div>
      </div>
  </footer>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'FooterApp',
  components: {
    BaseIcon: () => import('@/components/shared/BaseIcon'),
    BaseLabel: () => import('@/components/shared/BaseLabel')
  },
  computed: mapGetters('counter', ["countCounters"])

}
</script>
<style lang="scss">
@import "@/assets/css/mixins";
.site-footer {
  background-color: var(--color-neutral);
  padding: .5rem 0 .5rem;
  font-size: 15px;
  line-height: 20px;
  color: var(--color-light);

  .content{
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
  }

  .total-counters {
    text-align: right;

    .legend {
      font-size: 2rem;

      &::after {
        content: ' #';
      }
    }

    span {
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin-left: 6px;
      margin-right: 0;
      border-radius: 10%;
      background-color: var(--color-light);
      font-weight: bolder;
      font-size: 1.5rem;


    }
  }
}

.app-name-text {
  color: var(--color-light);
  font-weight: 700;
  font-size: 2rem;
  margin-left: 1rem
}

@include media('desktop') {
  .site-footer [class^=col-] {
    margin-bottom: 30px
  }
}

@include media('mobile') {
  .site-footer {
    padding-bottom: 0
  }
  .site-footer .app-name-text, .site-footer .total-counters {
    text-align: center
  }
}

.total-counters {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-bottom: 4px
  }
}

.total-counters span {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear;

  &:hover {
    color: var(--color-light);
    background-color: var(--color-conditional-down)
  }
}





</style>
