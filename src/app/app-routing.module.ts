import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'collections',
    loadChildren: async () => {
      const dynamicImport = await import('./collections/collections.module');
      return dynamicImport.CollectionsModule;
    },
  },
  {
    path: 'elements',
    loadChildren: async () => {
      const dynamicImport = await import('./elements/elements.module');
      return dynamicImport.ElementsModule;
    },
  },

  {
    path: 'views',
    loadChildren: async () => {
      const dynamicImport = await import('./views/views.module');
      return dynamicImport.ViewsModule;
    },
  },
  {
    path: 'mods',
    loadChildren: async () => {
      const dynamicImport = await import('./mods/mods.module');
      return dynamicImport.ModsModule;
    },
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
