import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgIf,NgTemplateOutlet,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  heading: string = 'This is Loaded Dynamically'
  imgUrl: string = 'https://images.ctfassets.net/zojzzdop0fzx/1HXhc8fHDYeYwp7xuBUsxb/3c8fc6aa1f44e68e455def8011585b5d/j0f6eq.png';
  isDisabled: boolean = false;
  isActive: boolean = true;
  textValue: string = 'Ashar Bhatti';
  isUserLoggedIn: boolean = false;
  userName: string = 'Ashar Bhatti';
  users:Array<string>=['Ashar','Talha','Usama','Hamza']

  buttonClick() {
    console.log('Button Clicked');
    this.isDisabled = !this.isDisabled;
  }

  keyPressed(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      alert(this.textValue);
    }
  }
  keyPressed2() {
    alert(this.textValue);
  }
  keyPressed3(userName: HTMLInputElement) {
    this.textValue = userName.value;
    alert(this.textValue);
  }
}
