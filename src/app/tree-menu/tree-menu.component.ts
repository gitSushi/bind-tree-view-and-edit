import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from '../tree';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss'],
})
export class TreeMenuComponent implements OnInit {
  @Input() trees: Tree[] = [];

  @Input() activeTreeId: number = -1;

  @Output() updateActiveTreeId = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(id: number) {
    this.activeTreeId = id;
    this.updateActiveTreeId.emit(id);
  }
}
