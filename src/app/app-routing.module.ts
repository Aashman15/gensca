import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScannerComponent} from "./scanner/scanner.component";
import {GeneratorComponent} from "./generator/generator.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BarcodeScannerComponent} from "./scanner/barcode-scanner/barcode-scanner.component";
import {QrCodeScannerComponent} from "./scanner/qr-code-scanner/qr-code-scanner.component";

const routes: Routes = [
  {
    path: 'scanner', component: ScannerComponent, children: [
      {path: 'barcode', component: BarcodeScannerComponent},
      {path: 'qrcode', component: QrCodeScannerComponent}
    ]
  },
  {path: 'generator', component: GeneratorComponent},
  {path: '', redirectTo: '/generator', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
