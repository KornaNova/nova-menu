import MenuSection from './components/MenuSection'
import MenuGroup from './components/MenuGroup'
import MenuItem from './components/MenuItem'
import MenuCard from './components/MenuCard'
import MainMenu from './components/MainMenu'
import MenuIcon from './components/MenuIcon.vue'
import UserMenu from './components/UserMenu'
import MenuDisclosure from './components/MenuDisclosure'

Nova.booting((app, store) => {
  app.component('AdvancedMenuIcon', MenuIcon)
  app.component('AdvancedMenuSection', MenuSection)
  app.component('advanced-menu-group', MenuGroup)
  app.component('menu-item-norman-huth', MenuItem)
  app.component('menu-card-norman-huth', MenuCard)
  app.component('menu-disclosure', MenuDisclosure)
  app.component('MainMenu', MainMenu)
  app.component('UserMenu', UserMenu)
})
