import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { StaticModule } from './modules/static.module'

@Component({
  selector: 'bnd-root',
  imports: [RouterOutlet, StaticModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
