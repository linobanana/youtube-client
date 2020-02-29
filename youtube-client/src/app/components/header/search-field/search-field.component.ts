import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
  @Output() public submit: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public submitForm(action: boolean): void {
    event.preventDefault();
    this.submit.emit(action);
  }

}
