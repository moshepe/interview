import { Juke } from './../../core/models/entities/juke.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { map, tap, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'juke';
  public juke$: Observable<Juke>;
  public jukes$ = [];
  private destroy$: Subject<Juke> = new Subject<Juke>();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  addNewItem() {
    this.getOneJuke();
  }

  getOneJuke() {
    this.dataService.getData().pipe(takeUntil(this.destroy$)).subscribe(juke => this.jukes$.unshift(juke));
  }

  removeItem(juke) {
    this.jukes$ = this.jukes$.filter(item => item !== juke);
  }

  onClearList() {
    this.jukes$.length = 0;
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
