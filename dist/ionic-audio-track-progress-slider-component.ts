import {IAudioProvider, ITrackConstraint, IAudioTrack} from './ionic-audio-interfaces'; 

import {Component, Directive, DoCheck, SimpleChange, EventEmitter, ElementRef, Renderer, Output, Input, Injectable, Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {DragGesture} from 'ionic-angular/gestures/drag-gesture';
import {NgStyle} from '@angular/common';

@Component({
    selector: 'audio-track-progress-slider',
    template: ``,
    directives: [NgStyle]
})
export class AudioTrackProgressSliderComponent extends DragGesture {
  @Input() audioTrack: IAudioTrack;
  @Output() onSeek = new EventEmitter<any>();
  private _completed: number = 0;
  constructor(private el: ElementRef) { 
    super(el.nativeElement);
  }
  
  ngOnInit() {      
    super.listen();  
  }
  
  ngDoCheck() {
    if(this.audioTrack.completed > 0 && !Object.is(this.audioTrack.completed, this._completed)) {
      
    }
  }
  
  onDrag(ev) {
  // console.log(ev)
    return super.onDrag(ev);
  };
  onDragStart(ev)  {
  // console.log(ev);
    return super.onDragStart(ev);
  };         
  onDragEnd(ev) {
    this.onSeek.emit(ev);
    return super.onDragEnd(ev);
  };

  ngOnChanges(change){
    console.log(change);
    if(change.audioTrack){
      this._completed=0;
      //this._range=0;
    }
  }  
}