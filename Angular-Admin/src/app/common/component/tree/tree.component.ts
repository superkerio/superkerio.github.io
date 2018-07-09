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
      // 第一步，把点击元素的的子元素都选上
    const that = this;
    setTimeout(() => { that.findCheckedData(item); that.findParentNode(this.sourceData, item.parentNode); }, 0);
    // 第二步，找出这个元素的父元素，如果子元素全选上了也选上，否则增加部分选上属性
    // 重复第二步，直到跟组件
  }
  // 判断点击的元素时候选中，然后选中或取消选中其所有子元素
  findCheckedData(data) {
    if (!data.children) {
      return;
    }
    data.children.forEach( (item) => {
      item.checked = data.checked;
      item.indeterminate = false;
      if (item.children) {
        this.findCheckedData(item);
      }
    });
  }
  // 初始化的时候给所有子元素添上父元素的标识
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
     if (item.name === name) { // if find father node
       this.checkParentNode(item);
     } else {
       if (item.children) {
         this.findParentNode(item.children, name);
       }
     }
   });
  }
  checkParentNode(item) {
    let isAllChildrenCheckedResult = this.isAllChildrenChecked(item.children) ;
    let isAllChildrenNotCheckedResult = this.isAllChildrenNotChecked(item.children);
    console.warn(isAllChildrenCheckedResult);
    console.warn(isAllChildrenNotCheckedResult);

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
    // 递归查找父元素
    if (item.parentNode) {
      this.findParentNode(this.sourceData, item.parentNode);
    }
  }



  isAllChildrenChecked(data) {
    let result = true;
    data.forEach((item) => {
      if (!item.checked) {
        result = false;
      }
    });
    return result;
  }
  isAllChildrenNotChecked(data) {
    let result = true;
    data.forEach((item) => {
        if (item.checked || item.indeterminate) {
          result = false;
        }
    });
    return result;
  }
}
