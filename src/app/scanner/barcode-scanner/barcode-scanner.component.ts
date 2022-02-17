import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  constructor(private toaster: ToastrService) {
    this.barcodeScanner = new BarcodeScannerLivestreamComponent();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    const code = result.codeResult.code;
    if (this.barcodeValue !== code) {
      this.toaster.success('Successfully Scanned !!!', '', {
        timeOut: 2000
      });
    }
    this.barcodeValue = code;
    this.barcodeScanner.stop();
  }

  onStarted(started: any) {
    console.log(started);
  }

  scanAgain() {
    this.barcodeValue = null;
    this.barcodeScanner.start();
  }

  ngOnDestroy(): void {
    this.barcodeScanner.stop();
  }


}
