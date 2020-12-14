import { Unit } from './unit';
import { Kingdom } from './kingdom';

export interface Barrack {
  id: number;
  unitId: number;
  kingdomId: number;
  nb: number;
  user: Unit;
  kingdom: Kingdom;
}