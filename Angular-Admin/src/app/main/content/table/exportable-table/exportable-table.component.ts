import { Component, OnInit } from '@angular/core';
import { TableService } from "../table.service";
import { saveAs } from "file-saver";

@Component({
  selector: 'app-exportable-table',
  templateUrl: './exportable-table.component.html',
  styleUrls: ['./exportable-table.component.scss']
})
export class ExportableTableComponent implements OnInit {
  public tableData = [];
  public tableTitle = ["ID", "姓名", "邮箱", "用户名", "联系方式"];
  public titleArr = ["id", "name", "email", "username", "contact"];
  public fileName = "";
  constructor(
    private tableService: TableService
  ) { }
  ngOnInit() {
    this.tableService.getTableData()
      .subscribe(res => {
        console.log(res);
        this.tableData = res;
      });
  }
  // 导出表格
  exportTable() {
    const blob = new Blob([document.getElementById('exportableTable').innerHTML], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
    });
    saveAs(blob, this.fileName ? this.fileName + ".xls" : 'new.xls');
  }

}
