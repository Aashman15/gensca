import {Component, ViewChild} from '@angular/core';
import {BarcodeFormat, Exception} from "@zxing/library";
import {ZXingScannerComponent} from "@zxing/ngx-scanner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
  @ViewChild(ZXingScannerComponent) scanner = new ZXingScannerComponent();

  value: String = '';
  showScanner: boolean = true;

  constructor(private toastr: ToastrService) {
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

  onScanSuccess(result: string) {
    this.value = result;
    this.showScanner = false;
    this.toastr.success('Successfully scanned !!!');
  }

  scanAgain() {
    this.value = '';
    this.showScanner = true;
  }

}
