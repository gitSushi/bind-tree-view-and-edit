import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Tree } from './tree';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('flexyItemSidebar') flexyItemSidebar: ElementRef =
    {} as ElementRef;
  @ViewChild('sidebarTreeMenuContainer') sidebarTreeMenuContainer: ElementRef =
    {} as ElementRef;
  isHidden: boolean = false;

  tree: Tree;

  constructor(private service: TreeService, private renderer: Renderer2) {
    this.tree = this.service.showTree();
  }

  toogleSidebar(event: MouseEvent) {
    if (this.isHidden) {
      this.renderer.setStyle(
        this.flexyItemSidebar.nativeElement,
        'width',
        '300px'
      );
      this.renderer.removeClass(
        this.sidebarTreeMenuContainer.nativeElement,
        'hide-container'
      );
      this.renderer.setProperty(event.target, 'textContent', '◄');
      this.isHidden = false;
    } else {
      this.renderer.setStyle(
        this.flexyItemSidebar.nativeElement,
        'width',
        '20px'
      );
      this.renderer.addClass(
        this.sidebarTreeMenuContainer.nativeElement,
        'hide-container'
      );
      this.renderer.setProperty(event.target, 'textContent', '►');
      this.isHidden = true;
    }
  }
}
