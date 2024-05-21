import { Component } from '@angular/core';
import  * as imageComments  from './../../assets/imageComments.json';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Comments here
</h3>
<img src={{imageSrc}}/>
  <p>
    
"I believe that AI and the scientific discovery of brain connection will bring new opportunities for communication without the need to learn a new language"
  </p>
  
  `,
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  imageSrc = imageComments.src;

}
