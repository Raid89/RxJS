import { displayLog } from './utils';
import { from } from 'rxjs';
export default () => {
    /** start coding */

    const myArray = [1,2,3,4,5];
    const myString = "Hello World"
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('Hello World')
    }, 1000));
    const observable = from(myPromise);
    const subscription = observable.subscribe(val => displayLog(val));

    /** end coding */
}