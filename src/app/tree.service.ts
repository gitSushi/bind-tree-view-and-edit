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
      },
      {
        value: 'C',
        id: 2,
        content: 'C Like a [ˈsiː]-through shirt',
      },
    ],
  };

  activeTreeId: number = 0;

  private messageSource = new BehaviorSubject(this.tree);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeContent(message: Tree) {
    this.messageSource.next(message);
    //  TRAVERSE TREE

    // this.trees = this.trees.map((e) => {
    //   if (e.id === message.id) return message;
    //   return e;
    // });
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
