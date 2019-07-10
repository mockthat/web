import { IScenario } from './scenarios.interface';

export interface ICategory {
  name: string;
  id: string;
  running: boolean;
  scenarios: IScenario[];
}
