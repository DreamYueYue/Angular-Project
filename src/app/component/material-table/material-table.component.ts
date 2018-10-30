import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
};

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource < PeriodicElement > ;
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'operation'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddDialog() {
    this.dialog.open(AddDialogComponent, {
      // width: '600px',
      // height: '600px',
      data: {
        name: 'Dream'
      },
      disableClose: true
    }).afterClosed().subscribe(res => {
      if (res) {
        res['position'] = this.ELEMENT_DATA.length + 1;
        this.ELEMENT_DATA.unshift(res);
        this.refreshTable();
      }
    });
  }

  delete(position) {
    this.ELEMENT_DATA.some((item, index) => {
      if (item.position == position) {
        this.ELEMENT_DATA.splice(index, 1);
        return true;
      }
    });
    this.refreshTable();
  }

  refreshTable() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openUpdateDialog(el) {
    this.dialog.open(UpdateDialogComponent, {
      // width: '600px',
      // height: '600px',
      disableClose: true,
      data: {
        user: el
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.ELEMENT_DATA.some((item, index) => {
          if (item.position == res.position) {
            this.ELEMENT_DATA[index] = res;
            return true;
          }
        });
        this.refreshTable();
      }
    });
  }
}