import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tree } from '../tree';
import { TreeService } from '../tree.service';
import { DomSanitizer } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-read-tree',
  templateUrl: './read-tree.component.html',
  styleUrls: ['./read-tree.component.scss'],
})
export class ReadTreeComponent implements OnInit, OnDestroy {
  activeTree: Tree = {
    id: -1,
  };

  activeTreeSubscription: Subscription | undefined;

  readonly YELLOW: string = '#FFFF00';
  readonly LIME: string = 'lime';
  readonly BLACK: string = '#000000';
  readonly TRENDING_BLUE = '#82c1ff';
  readonly TRENDING_RED = '#ff676b';

  highlightedColor: string = this.YELLOW;
  colorFillColor: string = this.BLACK;
  colorTextColor: string = this.TRENDING_BLUE;

  constructor(private treeService: TreeService) {}

  ngOnInit(): void {
    this.activeTreeSubscription = this.treeService.currentActiveTree.subscribe(
      (tree) => {
        if (tree != this.activeTree) {
          this.activeTree = tree;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.activeTreeSubscription && this.activeTreeSubscription.unsubscribe();
  }

  handleChange(value: string) {
    this.activeTree.content = value;
    this.treeService.changeContent(this.activeTree);
  }

  handlePreview() {
    console.log('NO PREVIEW YET ! ... snif');
  }

  handleBold() {
    console.log('How bold of you !');
  }

  handleItalic() {
    console.log(
      'I might be comming down with something, I feel a bit skewed ...'
    );
  }

  handleUnderlined() {
    console.log("What's that under my feet ? a line ?!?");
  }

  handleHighlighter() {
    if (this.highlightedColor === this.YELLOW) {
      this.highlightedColor = 'orangeRed';
    } else {
      this.highlightedColor = this.YELLOW;
    }
  }

  handleColorText() {
    if (this.colorTextColor === this.TRENDING_BLUE) {
      this.colorTextColor = this.TRENDING_RED;
    } else {
      this.colorTextColor = this.TRENDING_BLUE;
    }
  }

  handlePaint() {
    console.log('Paint me happy !');
  }

  handleFillColor() {
    if (this.colorFillColor === this.LIME) {
      this.colorFillColor = this.BLACK;
    } else {
      this.colorFillColor = this.LIME;
    }
  }
}
