import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tree } from './tree';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  tree: Tree = {
    value: 'A',
    id: 0,
    content: 'A Like an [eɪ]ging monkey',
    children: [
      {
        value: 'B',
        id: 1,
        content: 'B Like [ˈbiː] yourself',
        children: [
          {
            value: 'D',
            id: 3,
          },
        ],
      },
      {
        value: 'C',
        id: 2,
        content: 'C Like a [ˈsiː]-through shirt',
      },
    ],
  };

  activeTreeId: number = 0;
  activeTree: Tree = this.tree;

  private messageSource = new BehaviorSubject(this.tree);
  currentMessage = this.messageSource.asObservable();

  private activeTreeIdSubject = new BehaviorSubject(this.activeTreeId);
  currentActiveTreeId = this.activeTreeIdSubject.asObservable();

  private activeTreeSubject = new BehaviorSubject(this.activeTree);
  currentActiveTree = this.activeTreeSubject.asObservable();

  constructor() {}

  changeContent(message: Tree) {
    this.messageSource.next(message);
  }

  changeActiveTreeId(id: number) {
    this.activeTreeIdSubject.next(id);
    this.changeActiveTreeById(id);
  }

  changeActiveTreeById(id: number) {
    let leaf: Tree | null = null;
    if ((leaf = this.findLeafById(id))) {
      this.activeTree = leaf;
      this.activeTreeSubject.next(leaf);
    } else {
      console.error('Leaf was not found');
    }
  }

  showTree(): Tree {
    return this.tree;
  }

  showId(): number {
    return this.activeTreeId;
  }

  findLeafById(id: number): Tree | null {
    let foundLeaf: Tree | null = null;
    const loop = (leaf: Tree) => {
      if (leaf.id === id) {
        foundLeaf = leaf;
        return;
      }
      if ('children' in leaf) {
        leaf.children?.forEach((child) => loop(child));
      }
    };
    loop(this.tree);
    return foundLeaf;
  }
}
