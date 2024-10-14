import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AccountComponent } from '../../modules/account/account.component';
import { DiaryComponent } from '../../modules/diary/diary.component';
import { HomeComponent } from '../../modules/home/home.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, AccountComponent, DiaryComponent, HomeComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
