import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from '../tree';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss'],
})
export class TreeMenuComponent implements OnInit, OnDestroy {
  @Input() tree: Tree = {
    id: -1,
  };

  activeTreeId: number = -1;
  subscriptionToId: Subscription | undefined;

  constructor(private treeService: TreeService) {
    this.activeTreeId = this.treeService.showId();
  }

  ngOnInit(): void {
    this.subscriptionToId = this.treeService.currentActiveTreeId.subscribe(
      (id) => {
        if (id != this.activeTreeId) {
          this.activeTreeId = id;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionToId && this.subscriptionToId.unsubscribe();
  }

  handleClick(id: number) {
    this.treeService.changeActiveTreeId(id);
  }
}
