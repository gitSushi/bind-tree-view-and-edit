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

  trees: Tree[];
  activeTree: Tree;
  newContent: string;

  /**
   * @type {number} activeTreeId - Represents the history cookie : last visited node
   */
  activeTreeId: number;

  // message:string;
  subscription: Subscription | undefined;

  constructor(private service: TreeService) {
    this.trees = this.service.showTree();
    this.activeTreeId = this.service.showId();
    this.activeTree = this.trees[this.activeTreeId];
    this.newContent = this.trees[this.activeTreeId].content;
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
    console.log('doSomething', this.trees);
    console.log('this.activeTreeId', this.activeTreeId);
    this.updateNewContent(this.activeTreeId);
  }

  handleUpdateActiveTreeId(id: number) {
    this.activeTreeId = id;
    this.activeTree = this.trees[this.activeTreeId];
    this.updateNewContent(id);
  }

  updateNewContent(id: number) {
    this.newContent = this.trees[id].content;
  }
}
