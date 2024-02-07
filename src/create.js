import { displayLog } from './utils';
import { Observable } from 'rxjs';
export default () => {
    /** start coding */

    const hello = Observable.create(function(observer){
        observer.next("Hello");
        setTimeout(() => {
            observer.next("World");
        }, 1000);
        
    });

    const subscribe = hello.subscribe(event => displayLog(event));


    /** end coding */
}