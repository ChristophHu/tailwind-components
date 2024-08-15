import { ApplicationConfig } from '@angular/core'
import { provideRouter, Routes } from '@angular/router'
import { RouteOneComponent } from './shared/routes/route-one/route-one.component'
import { RouteTwoComponent } from './shared/routes/route-two/route-two.component'
import { RouteThreeComponent } from './shared/routes/route-three/route-three.component'
import { RouteFourComponent } from './shared/routes/route-four/route-four.component'
import { RouteFiveComponent } from './shared/routes/route-five/route-five.component'

// routes
export const routes: Routes = [
  { path: '', component: RouteOneComponent },
  { path: 'first', redirectTo: '' },
  { path: 'two', component: RouteTwoComponent },
  { path: 'three', component: RouteThreeComponent },
  { path: 'four', component: RouteFourComponent },
  { path: 'five', component: RouteFiveComponent },
  { path: '**', redirectTo: '' }
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}