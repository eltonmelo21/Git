import { Dao } from './dao';
import { Animal } from '../classes/animal';
import { Cavalo } from '../classes/cavalo';

let dao: Dao<Cavalo> = new Dao<Cavalo>();
let animal: Animal = new Animal('Rex');
let cavalo: Cavalo = new Cavalo('Titan');

dao.insert(cavalo);