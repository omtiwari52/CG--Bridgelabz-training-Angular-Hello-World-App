import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com/";
  username: String = '';

  ngOnInit():void{
    this.title = "Hello from BridgeLabz!!"
  }

  //event listener
  onClick($event:any){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
}