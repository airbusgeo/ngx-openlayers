import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { EventsCondition } from '../../ol-models';

@Component({
  selector: 'aol-interaction-dragrotate',
  template: '',
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  instance: DragRotate;

  @Input()
  condition: EventsCondition;
  @Input()
  duration: number;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragRotate(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}