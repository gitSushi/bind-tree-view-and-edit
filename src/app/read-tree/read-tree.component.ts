import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from '../tree';
import { TreeService } from '../tree.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import {
  FORMAT_BOLD_ICON,
  FORMAT_ITALIC,
  FORMAT_UNDERLINED,
  FORMAT_INK_HIGHLIGHTER_ICON,
  FORMAT_COLOR_TEXT_ICON,
  FORMAT_PAINT_ICON,
  FORMAT_COLOR_FILL_ICON,
} from './svg-icon';

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

  constructor(
    private service: TreeService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'format_bold',
      sanitizer.bypassSecurityTrustHtml(FORMAT_BOLD_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'format_italic',
      sanitizer.bypassSecurityTrustHtml(FORMAT_ITALIC)
    );
    iconRegistry.addSvgIconLiteral(
      'format_underlined',
      sanitizer.bypassSecurityTrustHtml(FORMAT_UNDERLINED)
    );
    iconRegistry.addSvgIconLiteral(
      'format_ink_highlighter',
      sanitizer.bypassSecurityTrustHtml(FORMAT_INK_HIGHLIGHTER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'format_color_text',
      sanitizer.bypassSecurityTrustHtml(FORMAT_COLOR_TEXT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'format_paint',
      sanitizer.bypassSecurityTrustHtml(FORMAT_PAINT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'format_color_fill',
      sanitizer.bypassSecurityTrustHtml(FORMAT_COLOR_FILL_ICON)
    );
  }

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
