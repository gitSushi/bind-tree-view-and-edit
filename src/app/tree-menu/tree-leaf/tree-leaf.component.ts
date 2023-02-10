import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from 'src/app/tree';

@Component({
  selector: 'app-tree-leaf',
  templateUrl: './tree-leaf.component.html',
  styleUrls: ['./tree-leaf.component.scss'],
})
export class TreeLeafComponent implements OnInit {
  @Input() leaf: Tree = {
    value: '',
    id: -1,
    content: '',
  };

  @Input() activeTreeId: number = -1;

  @Output() updateActiveLeafId = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(id: number) {
    console.log('leaf', id);
    this.updateActiveLeafId.emit(id);
  }
}
