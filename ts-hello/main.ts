
import {Point} from './point';
import {Like} from './like';

let point = new Point(1,2);
let like = new Like(2,true);
console.log('number of like: ' +  like.likeNum + ' state: '+like.state);
like.likeAction()
console.log('number of like: ' +  like.likeNum + ' state: '+like.state);
like.likeAction();
console.log('number of like: ' +  like.likeNum + ' state: '+like.state);
like.likeAction();
console.log('number of like: ' +  like.likeNum + ' state: '+like.state);
like.likeAction();
console.log('number of like: ' +  like.likeNum + ' state: '+like.state);
point.draw();