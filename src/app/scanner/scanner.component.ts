import {Component, OnInit, ViewChild} from '@angular/core';
import {BarcodeFormat} from "@zxing/library";
import {ZXingScannerComponent} from "@zxing/ngx-scanner";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  @ViewChild(ZXingScannerComponent) scanner = new ZXingScannerComponent();


   value: String = '';

  constructor() { }

  ngOnInit(): void {
    this.scanner.scanSuccess.subscribe(value => {
      alert("scanned and the value is " + value);
      this.scanner.scanStop();
    });
  }

  allowedFormats = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION
  ];

  scanAgain(){

  }

}
