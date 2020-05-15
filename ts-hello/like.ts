export class Like{

    constructor(private _likeNum?:number,private _state?:boolean)
    {

    }

    likeAction()
    {
        //if _state is on, decrease from _likeNum
        //else increase _likeNum
        if(this._state)
        {
            this._likeNum--;
            this._state = false;
        }
        else
        {
            this._likeNum++;
            this._state = true;
        }
    }

    get likeNum()
    {
        return this._likeNum;
    }
    get state()
    {
        return this._state;
    }


}