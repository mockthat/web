import { IService } from './service.interface';

export interface IScenario {
  name: string;
  id: string;
  api: IService;
  running: boolean;
  websocket: IService;
}
