import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ScannerComponent } from './scanner/scanner.component';
import { GeneratorComponent } from './generator/generator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BarcodeScannerComponent } from './scanner/barcode-scanner/barcode-scanner.component';
import { QrCodeScannerComponent } from './scanner/qr-code-scanner/qr-code-scanner.component';
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScannerComponent,
    GeneratorComponent,
    PageNotFoundComponent,
    BarcodeScannerComponent,
    QrCodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
