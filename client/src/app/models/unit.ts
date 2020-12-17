import { Barrack } from './barrack';

export interface Unit {
    id: number;
    name: string;
    off: number;
    def: number;
    booty: number;
    speed: number;
    bois: number;
    or: number;
    pop: number;
    pierre: number;
    barracks: Barrack[];
  }
