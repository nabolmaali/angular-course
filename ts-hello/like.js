"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_likeNum, _state) {
        this._likeNum = _likeNum;
        this._state = _state;
    }
    Like.prototype.likeAction = function () {
        //if _state is on, decrease from _likeNum
        //else increase _likeNum
        if (this._state) {
            this._likeNum--;
            this._state = false;
        }
        else {
            this._likeNum++;
            this._state = true;
        }
    };
    Object.defineProperty(Like.prototype, "likeNum", {
        get: function () {
            return this._likeNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
