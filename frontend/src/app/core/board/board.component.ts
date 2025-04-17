import { Component, Input } from '@angular/core';
import { StickyNoteComponent } from '../../core/sticky-note/sticky-note.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [StickyNoteComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  @Input() stickyNotes: any[] = [];
  dragPosition = { x: 0, y: 0 };
  activeStickyNoteId: string; // Default id
  activeStickyNotePosition: any; // Default note
  activeStickyNote: any; // Default note


  constructor() {
    this.stickyNotes = [{ id: '1', title: 'Note 1', content: 'Content 1', color: this.randomHexColorCode(), position: { x: 0, y: 0 } },
      { id: '2', title: 'Note 2', content: 'Content 2', color: this.randomHexColorCode(), position: { x: 100, y: 100 } },
      { id: '3', title: 'Note 3', content: 'Content 3', color: this.randomHexColorCode(), position: { x: 200, y: 100 } },
      ];
  }

  ngOnInit() {

  }


  changePosition() {

    this.dragPosition = { 
      x: Math.floor(Math.random() * 800 / 2 + 1), 
      y: Math.floor(Math.random() * 400 / 2 + 1) 
    };


    const oldStickyNote = { ...this.activeStickyNote };
    this.activeStickyNote['position'] = this.dragPosition;

    // console.log("stickyNotes: ", this.stickyNotes);

    // this.replaceItem(this.stickyNotes, oldStickyNote, this.activeStickyNote);

    // this.stickyNotes.splice(this.stickyNotes.length,0,this.activeStickyNote )
    // this.ngOnInit();
  }

  replaceItem(arr, oldItem, newItem) {
    const index = arr.indexOf(oldItem); // Find the index of the old item
    console.log("index: ", index);
    console.log("oldItem: ", oldItem);
    console.log("newItem: ", newItem);
    if (index !== -1) {
      arr.splice(index,1,newItem); // Replace the old item with the new item
    } else {
      console.error("Old item not found in the array.");
    }
  }


  reportNote(event: any) {

    // this.activeStickyNoteId = event.id;
    // this.activeStickyNotePosition = event.position;
    this.activeStickyNote = event; // Default note
    console.log(this.activeStickyNote)
    // const index = this.stickyNotes.indexOf(this.activeStickyNote);
    // this.replaceItem(this.stickyNotes, this.stickyNotes[index], this.activeStickyNote);

    // console.log("reportNote: ", this.activeStickyNoteId, this.activeStickyNote);
  }

  randomHexColorCode(): string {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

}
