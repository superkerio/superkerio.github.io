import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() treeData;
  @Input() sourceData;
  constructor() { }

  ngOnInit() {
    // treeData数组只能包含一个根节点
    setTimeout( () => {
      console.log(this.sourceData[0]);
      if (this.sourceData[0]["children"]) {
        this.setParentNode(this.sourceData[0].name, this.sourceData[0]["children"]);
      }
    }, 100);
  }
  refreshData(item) {
      // 第一步，把所有的checked的子元素都选上
    const that = this;
    setTimeout(() => { that.findCheckedData(this.sourceData); that.findParentNode(this.sourceData, item.parentNode); }, 0);
    // 第二步，找出这个元素的父元素，如果子元素全选上了也选上，否则增加部分选上属性
    // 重复第二步，直到跟组件

  }
  findCheckedData(data) {
    data.forEach( (item) => {
        if (item.checked && item.children) {
          this.checkAllChildren(item.children);
        } else {
          if (item.children) {
            this.findCheckedData(item.children);
          }
        }
    });
  }
  checkAllChildren(data) {
    data.forEach( (item) => {
      item.checked = true;
      if (item.children) {
        this.checkAllChildren(item.children);
      }
    });
  }
  setParentNode(parentName, children) {
    children.forEach((item) => {
      item.parentNode = parentName;
      if (item.children) {
        this.setParentNode(item.name, item.children);
      }
    });
  }
  findParentNode(data, name) {
   data.forEach((item) => {
     if (item.name === name) {
       this.checkParentNode(item);
     } else {
       if (item.children) {
         this.findParentNode(item.children, name);
       }
     }
   });
  }
  checkParentNode(item) {
    console.log("check");
    let isAllChildrenCheckedResult = true;
    this.isAllChildrenChecked(item.children, true, isAllChildrenCheckedResult) ;
    let isAllChildrenNotCheckedResult = true;
    this.isAllChildrenChecked(item.children, true, isAllChildrenNotCheckedResult);
    console.warn(isAllChildrenCheckedResult);

    if (isAllChildrenCheckedResult) {
      console.log("allChildrenTrue", item.name);
      item.checked = true;
      item.indeterminate = false;
    } else if ( isAllChildrenNotCheckedResult) {
      console.log("allChildrenFalse", item.name);
      item.checked = false;
      item.indeterminate = false;
    } else {
      console.log("halfChildrenTrue", item.name);
      item.indeterminate = true;
      item.checked = false;
    }
  }



  isAllChildrenChecked(data, condition, result) {
    data.forEach((item) => {
      console.log(item.checked, !condition);
      if (!item.checked === condition) {
        // 代表没有选中
        console.warn(item);
        result = false;
        return result;
      }
      if (item.children) {
        this.isAllChildrenChecked(item.children, condition, result);
      }
    });
    console.log(result, "result");
  }
  isAllChildrenNotChecked(data, condition, result) {
    data.forEach((item) => {
      if (item.checked === condition) {
        result = false;
      }
      if (item.children) {
        this.isAllChildrenChecked(item.children, condition, result);
      }
    });
    return result;
  }
}
