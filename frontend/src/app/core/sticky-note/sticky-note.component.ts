import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { CdkDrag, CdkDragMove, CdkDragRelease } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sticky-note',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './sticky-note.component.html',
  styleUrl: './sticky-note.component.css'
})
export class StickyNoteComponent {
  @Input() noteId: string = 'note-id'; // Default id
  @Input() noteColor: string = '#ffeb3b'; // Default color
  @Input() noteTitle: string = 'Untitled'; // Default color
  @Input() noteContent: string = 'Write content here'; // Default color
  @Input() notePosition: { x: number, y: number } = { x: 0, y: 0 }; // Default color
  @Input() note: any = {}; // Default note
  @Input() allNotes: any[] = []; // Default note

  @Output() reportNoteEvent = new EventEmitter<any>();

  @ViewChild('blue') blue: ElementRef;

  dragPosition = { x: 0, y: 0 };

  constructor(private renderer: Renderer2) { 
    
  }

  ngOnInit() {
    this.dragPosition = this.notePosition;
  }

  ngAfterViewInit() {
    this.setColor(this.noteColor);
  }

  onDragMoved(event: CdkDragMove) {
    this.dragPosition.x = event.pointerPosition.x;
    this.dragPosition.y = event.pointerPosition.y;
    // tracks
    // console.log(this.dragPosition.x, this.dragPosition.y);
  }


  onDragReleased(event: CdkDragRelease) {
    // this.dragPosition.x = event.pointerPosition.x;
    // this.dragPosition.y = event.pointerPosition.y;
    console.log("coordinates: ", this.dragPosition.x, this.dragPosition.y);
    
    const newNote = { ...this.note };
    const newNotes = [...this.allNotes];
    newNote.position = { x: this.dragPosition.x, y: this.dragPosition.y };

    this.replaceItem(newNotes, this.note, newNote);

    console.log("oldNotes: ", this.allNotes);
    console.log("newNotes: ", newNotes);

    this.switch();
    this.reportNoteEvent.emit(newNote);
  }

  replaceItem(arr, oldItem, newItem) {
    const index = arr.indexOf(oldItem); // Find the index of the old item
    // console.log("index: ", index);
    // console.log("oldItem: ", oldItem);
    // console.log("newItem: ", newItem);
    if (index !== -1) {
      arr.splice(index,1,newItem); // Replace the old item with the new item
    } else {
      console.error("Old item not found in the array.");
    }
  }

  setColor(color: string) {
    this.renderer.setStyle(this.blue.nativeElement, 'background-color', color);
  }

  switch() {
    this.renderer.setStyle(this.blue.nativeElement, 'background-color', this.randomHexColorCode());
  }

  
  randomHexColorCode(): string {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

}
