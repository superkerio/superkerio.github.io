// 属性型指令，在dom中添加后，其紧随其后的ul兄弟元素会有动画的展开和折叠效果，需要给其后的ul兄弟元素添加overflow:hidden,height:0,transition:height:0.5s;
import { Directive, ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: '[appSidebarTransition]'
})
export class SidebarTransitionDirective {

  constructor(private el: ElementRef) {}
  @HostListener('click') onClick() {
    this.toggleList();
  }
  private toggleList() {
    const ulElement = this.el.nativeElement.nextElementSibling;
    const liElementHeight = 46;
    if (ulElement.style.height == 0 || ulElement.style.height === '0px') {
      ulElement.style.height = liElementHeight * ulElement.children.length + 'px';
    } else {
      ulElement.style.height = 0;
    }
  }
}
