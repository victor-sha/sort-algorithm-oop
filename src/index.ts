import { Sort } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10, 0, -5, 1]);
console.log(numbersCollection.data);
const sorter = new Sort(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('WWaJfansLQQ');
const sorterCh = new Sort(charactersCollection);
sorterCh.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-200);
linkedList.add(30);
const linkedListSorter = new Sort(linkedList);
linkedListSorter.sort();
linkedList.print();