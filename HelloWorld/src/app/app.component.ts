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
  username: string = '';
  nameError: string ='';

  ngOnInit():void{
    this.title = "Hello from BridgeLabz!!"
  }

  //event listener
  onClick($event:any){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
  
  onInput($event:any){
    console.log("Change event occurred!!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.username)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!!";
  }
}