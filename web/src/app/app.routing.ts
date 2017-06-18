import { ModuleWithProviders } from '@angular/core';
// Importa o modulo de rotas do Angular 2
import { Routes, RouterModule }   from '@angular/router';
 
// Importa seus componentes criados
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemTypeFormComponent } from './item-type/item-type-form/item-type-form.component';
 
 
// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: ItemTypeComponent },
  { path: 'item-type/new', component: ItemTypeFormComponent},
  { path: 'item-type/:id', component: ItemTypeFormComponent},
  { path: 'item-type/:id/edit', component: ItemTypeFormComponent}
];
 
// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);