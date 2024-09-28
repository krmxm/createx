import { Component } from 'react';

import './team.scss';

import { ReactComponent as Linked } from '../../assets/img/icons/social/linked.svg';
import { ReactComponent as Twitter } from '../../assets/img/icons/social/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/img/icons/social/facebook.svg';

class TeamCards extends Component {
    constructor(props) {
        super(props);
    }

    onRenderCardsOfTeam = (cardsData) => {
        const elements = cardsData.map(item => {
            return (
                this.onRenderCardsItem(item)
            )
        })

        const list = () => {
            if (cardsData.length === 0) {
                return (

                    <p className="error">Content not found</p>
                )
            }

            return (
                <ul className='grid team-cards'>
                    {elements}
                </ul>
            );
        }
        return (
            list()
        )
    }

    onRenderCardsItem = ({ index, picture, name, post }) => {
        return (
            <li
                key={index}
                className='team-cards__item'
            >
                <div className="team-cards__img">
                    <img src={picture} alt="some cards" />
                    <div className="team-cards__social">
                        <a href="#" target='_blank' className="team-cards__link">
                            <Linked />
                        </a>
                        <a href="#" target='_blank' className="team-cards__link">
                            <Twitter />
                        </a>
                        <a href="#" target='_blank' className="team-cards__link">
                            <Facebook />
                        </a>
                    </div>
                </div>
                <div className="team-cards__content">
                    <div className="team-cards__text">
                        <h3 className='lead lead_bold'>{name}</h3>
                        <span className='base base_regular'>{post}</span>
                    </div>

                    {/* <button className='btn-reset btn btn_size-regular btn_theme-outline cards-item__btn'>View Project</button> */}
                </div>

            </li>
        )
    }

    render() {
        const { teamData } = this.props;
        return (
            <section className="our-team">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center">Our team</h2>
                    <p className="large large_regular large_center large_section-descr-mb">People are at the heart of Createx Construction Bureau  </p>
                    {this.onRenderCardsOfTeam(teamData)}
                </div>
            </section>
        )
    }
}


export default TeamCards;