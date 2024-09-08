import { Component } from 'react';
import SliderMini from '../../components/slider/slider';
import LearnMore from '../../components/learn-more/learn-more';



import './related-projects.scss'

class RelatedProjects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slideData = [
            { id: 1, picture: require('../../assets/img/related-1.jpeg'), title: 'Kids Bedroom With Decorations', descr: 'Apartments & flats' },
            { id: 2, picture: require('../../assets/img/related-2.jpeg'), title: 'Modern Double Bedroom', descr: 'Apartments & flats' },
            { id: 3, picture: require('../../assets/img/related-3.jpeg'), title: 'Scandinavian Style Interior', descr: 'Private houses' },
            { id: 4, picture: require('../../assets/img/related-1.jpeg'), title: 'Kids Bedroom With Decorations', descr: 'Apartments & flats' },
            { id: 5, picture: require('../../assets/img/related-2.jpeg'), title: 'Modern Double Bedroom', descr: 'Apartments & flats' }
        ];
        return (
            <div className="section-offset related-projects">
                <div className="container">
                    <SliderMini title='Related projects' slides={slideData} />
                    <LearnMore title='Explore all our works' textBtn='View portfolio' classLearnMore='related-projects__learn' />
                </div>
            </div>
        )
    }
}

export default RelatedProjects;