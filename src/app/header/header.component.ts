import { Component } from '@angular/core';
import * as content from '../../assets/content.json';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public headerLogo = content.HEADER_LOGO;
  constructor() {
    new BackendService().ping();
  }
}
