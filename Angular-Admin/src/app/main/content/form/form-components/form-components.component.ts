import { Component, OnInit } from '@angular/core';
import { FormService } from "../form.service";

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.scss']
})
export class FormComponentsComponent implements OnInit {
  public treeData = [];
  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
    this.formService.getTreeData()
      .subscribe(res => {
        this.treeData = res;
        console.log(res);
      });
  }

}
