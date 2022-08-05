<template>
  <div>
    <div class="sidebar-logo-container">
      <img
        src="http://likede2-admin.itheima.net/img/logo.3673fab5.png"
        class="sidebar-logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #5373e0;
  // text-align: center;
  overflow: hidden;
  .sidebar-logo {
    margin-top: 12.5px;
    margin-left: 15px;
    height: 35px;
    z-index: 99;
  }

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    // & .sidebar-logo {
    //   width: 32px;
    //   height: 32px;
    //   vertical-align: middle;
    //   margin-right: 12px;
    // }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
