import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from '../tree';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-read-tree',
  templateUrl: './read-tree.component.html',
  styleUrls: ['./read-tree.component.scss'],
})
export class ReadTreeComponent implements OnInit, OnDestroy {
  @Input() activeTree: Tree = {
    value: '',
    id: -1,
    content: '',
  };

  subscription: Subscription | undefined;

  constructor(private service: TreeService) {}

  ngOnInit(): void {
    this.subscription = this.service.currentMessage.subscribe(
      (message) => message
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  handleChange(value: string) {
    this.activeTree.content = value;
    this.service.changeContent(this.activeTree);
  }
}
