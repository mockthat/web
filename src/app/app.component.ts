import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICategory } from './shared/interfaces/category.interface';
import { IScenario } from './shared/interfaces/scenarios.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories$ = this.http.get<ICategory[]>('/available-mocks');

  constructor(private http: HttpClient) { }

  toggle(scenario: IScenario, category: ICategory) {
    this.http.get(`/mock/${category.id}/${scenario.id}/${scenario.running ? 'stop' : 'start'}`).subscribe(() => this.refresh());
  }

  private refresh() {
    // I know, my mom hates me
    this.categories$ = this.http.get<ICategory[]>('/available-mocks');
  }
}
