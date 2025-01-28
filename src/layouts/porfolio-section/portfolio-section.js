import { Component } from 'react';
import SliderMini from '../../components/slider/slider';
import LearnMore from '../../components/learn-more/learn-more';



import './portfolio-section.scss'

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slideData = [
            { id: 0, picture: require('../../assets/img/portfolio-1.jpeg'), title: 'Red Finger Building', descr: 'Business Centers' },
            { id: 1, picture: require('../../assets/img/portfolio-2.jpeg'), title: 'Cubes Building', descr: 'Business Centers' },
            { id: 2, picture: require('../../assets/img/portfolio-3.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls' },
            { id: 3, picture: require('../../assets/img/portfolio-1.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls' },
            { id: 4, picture: require('../../assets/img/portfolio-2.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls' }
        ];
        return (
            <div className="section-offset portfolio-section">
                <div className="container">
                    <SliderMini title='Browse our selected projects and learn more about our work' slides={slideData} />
                    <LearnMore title='Explore all our works' textBtn='View portfolio' classLearnMore='portfolio-section__learn' />
                </div>
            </div>
        )
    }
}

export default PortfolioSection;