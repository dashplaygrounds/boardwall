import { Component } from '@angular/core';
import { BoardComponent } from '../../core/board/board.component';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {

}
