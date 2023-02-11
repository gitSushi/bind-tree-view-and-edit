import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from 'src/app/tree';
import { TreeService } from 'src/app/tree.service';

@Component({
  selector: 'app-tree-leaf',
  templateUrl: './tree-leaf.component.html',
  styleUrls: ['./tree-leaf.component.scss'],
})
export class TreeLeafComponent implements OnInit, OnDestroy {
  @Input() leaf: Tree = {
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
