import { Sort } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10, 0, -5, 1]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('WWaJfansLQQ');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-200);
linkedList.add(30);
linkedList.sort();
linkedList.print();