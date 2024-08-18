import { Component } from 'react';
import SliderMini from '../../components/slider/slider';


import './portfolio-section.scss'

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slideData = [
            { id: 1, picture: require('../../assets/img/portfolio-1.jpeg'), title: 'Red Finger Building', descr: 'Business Centers' },
            { id: 1, picture: require('../../assets/img/portfolio-2.jpeg'), title: 'Cubes Building', descr: 'Business Centers' },
            { id: 1, picture: require('../../assets/img/portfolio-3.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls' },
            { id: 1, picture: require('../../assets/img/portfolio-1.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls' },
            { id: 1, picture: require('../../assets/img/portfolio-2.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls' }
        ];
        return (
            <div className="section-offset portfolio-section">
                <div className="container">
                    <SliderMini slides={slideData} />
                </div>
            </div>
        )
    }
}

export default PortfolioSection;