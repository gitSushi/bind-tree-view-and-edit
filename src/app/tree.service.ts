import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tree } from './tree';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  trees: Tree[] = [
    {
      value: 'A',
      id: 0,
      content: 'A Like an [eɪ]ging monkey',
    },
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
  ];

  activeTreeId: number = 0;

  private messageSource = new BehaviorSubject(this.trees[0]);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeContent(message: Tree) {
    this.messageSource.next(message);
    this.trees = this.trees.map((e) => {
      if (e.id === message.id) return message;
      return e;
    });
  }

  showTree(): Tree[] {
    return this.trees;
  }

  showId(): number {
    return this.activeTreeId;
  }
}
