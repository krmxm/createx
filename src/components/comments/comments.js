import { Component } from 'react';

import { ReactComponent as Replay } from '../../assets/img/icons/replay.svg';


import './comments.scss';

class Comments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="comments">
                <h2 class="title title--center comments__title">4 comments</h2>
                <ul class="list-reset comments__list">
                    <li class="comments__item">
                        <article class="comment">
                            <div class="comment__left">
                                <span class="comment__author">Devon lane</span>
                                <time class="comment__time" datetime="2020-07-15 19:00">July 15, 2020</time>
                            </div>
                            <div class="comment__right">
                                <div class="comment__body">
                                    <p>
                                        Phasellus varius faucibus ultrices odio&nbsp;in. Massa neque dictum natoque ornare rutrum malesuada
                                        et&nbsp;phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique
                                        felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam&nbsp;et.
                                    </p>
                                </div>
                                <button class="btn-reset comment__reply">
                                    <Replay />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </article>
                    </li>
                    <li class="comments__item">
                        <article class="comment">
                            <div class="comment__left">
                                <span class="comment__author">Devon lane</span>
                                <time class="comment__time" datetime="2020-07-15 19:00">July 15, 2020</time>
                            </div>
                            <div class="comment__right">
                                <div class="comment__body">
                                    <p>
                                        <a href="#">@Devon Lane</a> Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed
                                        rhoncus quis pharetra pellentesque erat sagittis.
                                    </p>
                                </div>
                                <button class="btn-reset comment__reply">
                                    <Replay />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </article>
                    </li>
                    <li class="comments__item">
                        <article class="comment">
                            <div class="comment__left">
                                <span class="comment__author">Devon lane</span>
                                <time class="comment__time" datetime="2020-07-15 19:00">July 15, 2020</time>
                            </div>
                            <div class="comment__right">
                                <div class="comment__body">
                                    <p>
                                        Libero commodo sit dui ac&nbsp;proin. Penatibus ultricies at&nbsp;adipiscing mauris nunc. Fames faucibus
                                        nisl duis id&nbsp;diam.
                                    </p>
                                </div>
                                <button class="btn-reset comment__reply">
                                    <Replay />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </article>
                    </li>
                    <li class="comments__item">
                        <article class="comment">
                            <div class="comment__left">
                                <span class="comment__author">Devon lane</span>
                                <time class="comment__time" datetime="2020-07-15 19:00">July 15, 2020</time>
                            </div>
                            <div class="comment__right">
                                <div class="comment__body">
                                    <p>
                                        Ullamcorper nibh sed ac&nbsp;ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat
                                        libero, tincidunt. Eros ut&nbsp;aliquam proin et&nbsp;duis. Mauris, egestas congue nibh dui a&nbsp;nulla.
                                    </p>
                                </div>
                                <button class="btn-reset comment__reply">
                                    <Replay />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Comments;