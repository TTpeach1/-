<template>
  <div class="navbar">
    <div class="right-menu">
      <div class="avatar-wrapper">
        <img v-imgError='defaultImg' :src="$store.state.user.userInfo.image?$store.state.user.userInfo.image:123" class="user-avatar" />
        <span class="username"
          >欢迎您 {{ $store.state.user.userInfo.loginName }}</span
        >
        <span @click="logout">退 出</span>
        <i class="el-icon-caret-bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import store from '@/store'
// import defaultImg from '@/assets/common/head.jpg'


export default {
  data(){
    return {
      defaultImg:'data:image/png;base64,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'
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      console.log(22)
      store.dispatch('user/logout')
      this.$router.push('/login')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  // line-height: 60px;
  overflow: hidden;
  position: relative;
  background: #5373e0;
  // font-size: 16px;
  padding-right: 10px;
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .username {
    padding: 0 10px;
  }
  span:nth-child(3) {
    cursor: pointer;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    span {
      margin: 0 10px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          cursor: pointer;
          width: 35px;
          height: 35px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }

  }
}
</style>
