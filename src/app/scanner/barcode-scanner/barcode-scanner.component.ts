import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements OnInit, AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  constructor() {
    this.barcodeScanner = new BarcodeScannerLivestreamComponent();
  }

  ngOnInit(): void {
  }

  initQuagga() {
  }

  ngAfterViewInit(): void {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any) {
    console.log(started);
  }


}
