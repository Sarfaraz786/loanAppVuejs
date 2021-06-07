<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="340"
      bordered
      content-class="bg-cprimary pire-left-nav"
    >
      <q-list>
        <div class="brand-wrap">
          <q-item-label header>
          <img
            alt="Aspire logo"
            src="~assets/aspire-logo.svg"
            style="width: 125px; height: 35px"
          >
          </q-item-label>
          <q-item-label header class="logo-title q-pt-none">
            <p class="q-mb-xs">Trusted way of banking for 3,000+</p> <div>SMEs and startups in Singapore</div>
          </q-item-label>
        </div>
        
        <SiderbarNav
          v-for="link in SiderbarNav"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SiderbarNav from 'src/components/SiderbarNav.vue'
import homeIcon from '../assets/home.svg'
import cardIcon from '../assets/card.svg'
import pyamentIcon from '../assets/payments.svg'
import creditIcon from '../assets/credit.svg'
import settingIcon from '../assets/setting.svg'

const linksData = [
  {
    title: 'Home',
    icon: homeIcon,
    link: '/'
  },
  {
    title: 'Cards',
    icon: cardIcon,
    link: '/card'
  },
  {
    title: 'Payments',
    icon: pyamentIcon,
    link: '/payments'
  },
  {
    title: 'Credit',
    icon: creditIcon,
    link: '/credit'
  },
  {
    title: 'Settings',
    icon: settingIcon,
    link: '/settings'
  },
];

export default {
  name: 'MainLayout',
  components: { SiderbarNav },
  data () {
    return {
      leftDrawerOpen: false,
      SiderbarNav: linksData
    }
  }
}
</script>
