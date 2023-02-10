import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from './tree';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'bind-tree-view-and-edit';

  tree: Tree;
  activeTree: Tree;
  newContent: string;

  /**
   * @type {number} activeTreeId - Represents the history cookie : last visited node
   */
  activeTreeId: number;

  // message:string;
  subscription: Subscription | undefined;

  constructor(private service: TreeService) {
    this.tree = this.service.showTree();
    this.activeTreeId = this.service.showId();
    // this.activeTree = this.trees[this.activeTreeId];
    // this.newContent = this.trees[this.activeTreeId].content;
    this.activeTree = this.tree;
    this.newContent = this.tree.content;
  }

  ngOnInit(): void {
    this.subscription = this.service.currentMessage.subscribe((message) => {
      this.doSomething();
    });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  doSomething() {
    console.log('doSomething', this.tree);
    console.log('this.activeTreeId', this.activeTreeId);
    this.updateNewContent(this.activeTreeId);
  }

  handleUpdateActiveTreeId(id: number) {
    this.activeTreeId = id;
    console.log('handleUpdateActive TREE Id : Need to add activeTree', id);
    // this.activeTree = this.trees[this.activeTreeId];
    this.assignActiveTree(id);
  }

  handleUpdateActiveLeafId(id: number) {
    this.activeTreeId = id;
    console.log('handleUpdateActive LEAF Id : Need to add activeTree', id);
    // this.activeTree = this.trees[this.activeTreeId];
    this.assignActiveTree(id);
  }

  assignActiveTree(id: number) {
    let leaf: Tree | null = null;
    if ((leaf = this.service.findLeafById(id))) {
      this.activeTree = leaf;
      this.updateNewContent(id);
    }
  }

  updateNewContent(id: number) {
    console.log('updateNewContent : Need to add id', id);
    // this.newContent = this.trees[id].content;
    this.newContent = this.tree.content;
  }
}
