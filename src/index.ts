import { Sort } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection';


const numbersCollection = new NumbersCollection([10, 0, -5, 1]);
console.log(numbersCollection.data);
const sorter = new Sort(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('WWaJfansLQQ');
const sorterCh = new Sort(charactersCollection);
sorterCh.sort();
console.log(charactersCollection.data);