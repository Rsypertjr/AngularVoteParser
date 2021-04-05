<div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <div class="md-form">
        <input type="text" class="form-control" [(ngModel)]="searchText" (keyup)="searchItems()" id="search-input"
               mdbInput>
        <label for="search-input">Search</label>
      </div>
    </div>
    <table mdbTable #tableEl="mdbTable" stickyHeader="true" hover="true" striped="true" class="z-depth-1">
      <thead class="sticky-top">
      <tr>
        <th *ngFor="let head of headElements; let i = index" [mdbTableSort]="elements" [sortBy]="headElements[i]"
            scope="col">{{head | titlecase}} <mdb-icon fas icon="sort"></mdb-icon>
        </th>
      </tr>
      </thead>
      <tbody #row>
      <tr mdbTableCol (rowCreated)="onRowCreate($event)" (rowRemoved)="onRowRemove($event)" *ngFor="let el of elements; let i = index">
        <th *ngIf="i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex" scope="row">{{el.id}}</th>
        <td *ngIf="i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex" class="red-text">{{el.first}}</td>
        <td *ngIf="i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex">{{el.last}}</td>
        <td *ngIf="i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex">{{el.handle}}</td>
      </tr>
      </tbody>
      <tfoot class="grey lighten-5 w-100">
      <tr>
        <td colspan="4">
          <mdb-table-pagination [tableEl]="tableEl" paginationAlign="" [searchDataSource]="elements"></mdb-table-pagination>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</div>