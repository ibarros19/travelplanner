
import {createRouter, createWebHistory} from 'vue-router'

import Splashpage from './src/pages/Splashpage.vue'
import newFlight from './src/pages/newFlight.vue'
import newCarRental from './src/pages/newCarRental.vue'
import newHotel from './src/pages/newHotel.vue'
import newLinks from './src/pages/newLinks.vue'
import newThingsToDo from './src/pages/newThingsToDo.vue'
import newWhereToEat from './src/pages/newWheretoEat.vue'
import addANewTrip from './src/pages/AddANewTrip.vue'
import Eurotrip2022 from './src/pages/Eurotrip2022.vue'




const router=createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/addanewtrip', name:"newtrip", component: addANewTrip},
        {path: '/', name:"Home", component: Splashpage},
        {path: '/newflight', name:"Add New Flight", component: newFlight},
        {path: '/newcarrental', name:"Add New car rental", component: newCarRental},
        {path: '/newhotel', name:"Add New Hotel", component: newHotel},
        {path: '/newlinks', name:"Add New Link", component: newLinks},
        {path: '/newthingstodo', name:"Add New Things to do", component: newThingsToDo},
        {path: '/newflight', name:"Add New Flight", component: newFlight},
        {path: '/newwheretoeat', name: "Add New Where To Eat", component: newWhereToEat},
        {path: '/eurotrip2022', name: "Euro Trip 2022", component: Eurotrip2022}
    ]
  })

  export default router