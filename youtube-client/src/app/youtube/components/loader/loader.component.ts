import { LoaderService } from './../../services/loader.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  public color: string = 'primary';
  public mode: string = 'indeterminate';
  public value: number = 100;
  public isLoading: Subject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService: LoaderService) { }

}
