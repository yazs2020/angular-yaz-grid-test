import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [ 'site.css', 'material-edited.css', 'myaapicons.css' ]
})
export class AppComponent {
    public data: any[];
    public initialPage: Object;

    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = this.helloGen();
        this.initialPage = { pageSizes: true, pageCount: 4 };
    }
    helloGen() {
      const res = {
        OrderID: 1,

        OrderID1: 'This is a placeholder text. Very long one.',
        OrderID2: 1,
        OrderID3: 1,
        OrderID4: 1,
        OrderID5: 1,
        OrderID6: 1,
        OrderID7: 1,

        CustomerID: 2,
        ShipCity: 'Cox Bazar',
        ShipName: 'Titanic',
        ShipCountry: 'France',
        ShipAddress: 'Madrid',
        Freight: 'Pixel'
      };
      
      const arr = [];
      for (let i = 0;i < 1000;i++) {
        arr.push(res);
      }
      return arr;
    }
    dataBound() {
       this.grid.autoFitColumns();
    }


}