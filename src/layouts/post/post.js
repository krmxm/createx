import { Component } from 'react';

import Comments from '../../components/comments/comments';
import PostForm from '../../components/post-form/post-form';

import Post from '../../assets/img/news/post/post-1.jpeg'

import { ReactComponent as Linked } from '../../assets/img/icons/social/linked.svg';
import { ReactComponent as Twitter } from '../../assets/img/icons/social/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/img/icons/social/facebook.svg';

import './post.scss';

class PostArticle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="post">
                <div className="container">
                    <img src={Post} alt="Обложка поста" className='post__cover' />
                    <div className="post__wrapper">
                        <div className="post__content">
                            <h2 className='lead lead_bold'>Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit
                                malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac&nbsp;euismod.
                            </h2>
                            <p className='base base_regular'>
                                At&nbsp;facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in&nbsp;et&nbsp;sagittis,
                                vitae
                                diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
                                neque,
                                fermentum. Vel nec rhoncus, non nunc, neque in&nbsp;massa. Feugiat leo nam nisl lacinia amet, odio.
                                Mi&nbsp;varius viverra risus vel.
                            </p>
                            <p className='base base_regular'>
                                Amet, morbi sed pharetra, elit eget mi&nbsp;potenti. Condimentum orci interdum feugiat lectus libero duis.
                                Nisl
                                massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et&nbsp;sed. Aliquet non sed duis
                                diam
                                vehicula rhoncus. In&nbsp;dictum nullam tincidunt semper pellentesque purus morbi sed. Ut&nbsp;aliquet velit
                                pharetra, nisi nunc, non.
                            </p>
                            <blockquote className='lead lead_bold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis
                                fermentum
                                amet, eu. Pulvinar eu&nbsp;sed purus facilisi. Vitae id&nbsp;turpis tempus ornare turpis quis non. Congue
                                tortor
                                in&nbsp;tot euismod vulputate etiam eros. Vel accumsan at&nbsp;elit neque, ipsum.
                            </blockquote>
                            <p className='base base_regular'>
                                Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut&nbsp;sed id&nbsp;ut&nbsp;erat mattis. Vitae mus
                                blandit
                                in&nbsp;neque amet non fringilla blandit:
                            </p>
                            <ul>
                                <li className='base base_regular'>A&nbsp;fermentum in&nbsp;morbi pretium aliquam adipiscing donec tempus.</li>
                                <li className='base base_regular'>Vulputate placerat amet pulvinar lorem nisl.</li>
                                <li className='base base_regular'>Consequat feugiat habitant gravida quisque elit bibendum id&nbsp;adipiscing sed.</li>
                                <li className='base base_regular'>Etiam duis lobortis in&nbsp;fames ultrices commodo nibh.</li>
                            </ul>
                            <p className='base base_regular'>
                                Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id&nbsp;nec sed leo. Nisi in&nbsp;ornare
                                lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
                                neque
                                ut&nbsp;aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo,
                                pharetra
                                nibh risus. Facilisi at&nbsp;porttitor volutpat natoque proin amet, nulla. Vivamus ut&nbsp;lobortis sagittis
                                curabitur tellus convallis eget netus vitae.
                            </p>
                        </div>
                        <div className="post__share">
                            <span className='base base_bold'>Share:</span>
                            <ul class="social post__social">
                                <li class="social__item">
                                    <a href="#" target="_blank" class="social__link" aria-label="Facebook">
                                        <Facebook />
                                    </a>
                                </li>
                                <li class="social__item">
                                    <a href="#" target="_blank" class="social__link" aria-label="Facebook">
                                        <Linked />
                                    </a>
                                </li>
                                <li class="social__item">
                                    <a href="#" target="_blank" class="social__link" aria-label="Facebook">
                                        <Twitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Comments />
                        <PostForm />
                    </div>
                </div>
            </article>
        )
    }
}

export default PostArticle;