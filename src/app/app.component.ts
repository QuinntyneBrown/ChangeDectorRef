import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public value: number = 0;

  constructor(
    private readonly _changeDectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.value++;
      this._changeDectorRef.detectChanges();
    },1000);
  }
}
