import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';
import { IOrder } from './my-orders';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed, void',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition('* <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MyOrdersComponent implements OnInit {
  userId = 795;
  isLoading: boolean | undefined;
  displayedColumns: string[] = ['orderId', 'orderedOn', 'orderTotal'];
  dataSource = new MatTableDataSource<IOrder>();
  expandedElement: null | undefined;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.loadOrderList();
  }

  loadOrderList(): void {
    this.isLoading = true;
    this.orderService.getMyOrders(this.userId).subscribe({
      next: (resp: IOrder[]) => {
        if (resp !== null) {
          this.isLoading = false;
          console.log('Order response ===>', resp);
          this.dataSource.data = Object.values(resp);
          console.log('this.dataSource.data', resp);
        }
      },
      error: (err: any) => {
        console.log('Errors :::>', err);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }

  applyFilter(filterValue: any) {

    console.log('filterValue', filterValue.target.value);
    filterValue = filterValue.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
