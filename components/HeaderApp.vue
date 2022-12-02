<template>
  <header id="app-header" class="app-header">

    <div class="background-container">
      <div id="background-back" class="background"></div>
      <div id="background-front" class="background"></div>
    </div>

    <div class="header-content">
      <div id="small-toolbar" class="app-toolbar">

        <div class="icon-button">
          <div class="icon">
            <i class="material-icons">menu</i>
          </div>
        </div>

        <div id="small-title" class="small-title">Some Title</div>
        <div class="icon-button">
          <div class="icon">
            <i class="material-icons">search</i>
          </div>
        </div>

        <div class="icon-button">
          <div class="icon">
            <i class="material-icons">more_vert</i>
          </div>
        </div>

      </div>

      <div id="large-toolbar" class="app-toolbar tall">
        <div id="large-title" class="large-title">Some Title</div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderApp'
}
</script>
<style scoped lang="scss">
$headerHeight: 150px;
$toolbarHeight: 64px;

.app-header {
  background: #3f51b5;
  width: 100%;
  color: #fff;
  height: $headerHeight;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
}

.header-content {
  position: relative;
  height: 100%;
  width: 100%;
}

.app-toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: $toolbarHeight;
  pointer-events: none;
  font-size: 20px;
}

#large-toolbar {
  position: absolute;
  bottom: 0;
  transform-origin: left top;
  margin-bottom: 24px;
  margin-bottom: 16px;
  width: 100%;
}

.small-title,
.large-title {
  transform-origin: left top;
  white-space: nowrap;
  flex: 1;
  flex-basis: 0.000000001px;
  overflow: hidden;
  font-weight: 400;
  line-height: 1.5;
  position: relative;
}

.small-title {
  margin-left: 14px;
  // visibility: hidden;
  opacity: 0;
}

.large-title {
  will-change: transform, opacity;
  font-size: 56px;
  font-size: 2em;
  margin-left: 64px;
}

.icon-button {
  display: inline-block;
  position: relative;
  padding: 6px;
  outline: none;
  user-select: none;
  font-size: 0;
  line-height: 1;
  width: 40px;
  height: 40px;
  box-sizing: border-box !important;

}

.background-container {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.background {
  pointer-events: none;
  position: absolute;
  background-size: cover;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  will-change: transform, opacity;
}

#background-back {
  background-position: left center;
  opacity: 0;
  visibility: hidden;
}

#background-front {
  background-position: left center;
}

</style>
