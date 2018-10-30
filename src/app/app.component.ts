import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [ // 第一个参数是动画名称 stateChangeExpr
      transition("* <=> *", [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate(500, style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'my-demo-app';
  gg(outlet: RouterOutlet) { // 传递进入的组件的信息
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}