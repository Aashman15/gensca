import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScannerComponent} from "./scanner/scanner.component";
import {GeneratorComponent} from "./generator/generator.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'scanner', component: ScannerComponent
  },
  {path: 'generator', component: GeneratorComponent},
  {path: '', redirectTo: '/generator', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
