import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CoursesComponent {

  @Input() userName:string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();


  fav(courseName: string){
    this.addFavoriteEvent.emit(courseName);
      /* alert(`A ${this.userName} likes the game ${this.games.find( game => game.id === gameId )}`); */
  } 

  courses = [
    {
      id: 1,
      name:"First english course"
    },
    {
      id: 2,
      name:"Second english course"
    },
    {
      id: 3,
      name:"Third english course"
    },
    {
      id: 4,
      name:"Four english course"
    }
  ]
}
