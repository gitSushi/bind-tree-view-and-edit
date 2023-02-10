import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from '../tree';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss'],
})
export class TreeMenuComponent implements OnInit {
  @Input() tree: Tree = {
    value: '',
    id: -1,
    content: '',
  };

  @Input() activeTreeId: number = -1;

  @Output() updateActiveTreeId = new EventEmitter<number>();
  @Output() updateActiveLeafId = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(id: number) {
    console.log('handleClick', id);

    this.activeTreeId = id;
    this.updateActiveTreeId.emit(id);
  }

  handleUpdateActiveLeafId(id: number) {
    this.updateActiveLeafId.emit(id);
  }
}
