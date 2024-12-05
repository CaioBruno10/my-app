import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  nome: string = "Outro component";
    
  ngOnInit(): void {
    
  }

}
