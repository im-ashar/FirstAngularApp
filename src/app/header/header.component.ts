import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  heading: string = 'This is Loaded Dynamically'
  imgUrl: string = 'https://images.ctfassets.net/zojzzdop0fzx/1HXhc8fHDYeYwp7xuBUsxb/3c8fc6aa1f44e68e455def8011585b5d/j0f6eq.png';
  isDisabled: boolean = true;
}
