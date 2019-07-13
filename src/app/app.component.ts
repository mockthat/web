import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICategory } from './shared/interfaces/category.interface';
import { IScenario } from './shared/interfaces/scenarios.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.refresh();
  }

  toggle(scenario: IScenario, category: ICategory) {
    this.http.get(`/mock/${category.id}/${scenario.id}/${scenario.running ? 'stop' : 'start'}`).subscribe(() => this.refresh());
  }

  private refresh() {
    this.http.get<ICategory[]>('/available-mocks').subscribe(categories => this.categories = categories);
  }
}
