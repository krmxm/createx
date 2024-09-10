import { Component } from 'react';

import './pricing.scss';

import decorate from '../../assets/img/image.png';

class Pricing extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="pricing">
                <img src={decorate} alt="" aria-hidden="true" class="pricing__decorate"></img>
                <div className="container">
                    <h2 className="title title_h2 title_h2-center">Pricing</h2>
                    <p className="large large__regular pricing__descr">We offer you three categories of construction.</p>
                    <div className="table-wrapper">
                        <table className="pricing__table table">
                            <caption className="visually-hidden">Tariffs table</caption>
                            <thead className="table__header">
                                <tr className="table__row">
                                    <th className="table__th">Items</th>
                                    <th className="table__th">
                                        <div className="table__heading">Basic</div>
                                        <div className="table__per">$20 per m2</div>
                                    </th>
                                    <th className="table__th">
                                        <div className="table__heading">STANDARD</div>
                                        <div className="table__per">$30 per m2</div>
                                    </th>
                                    <th className="table__th">
                                        <div className="table__heading">BUSINESS</div>
                                        <div className="table__per">$40 per m2</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="table__body">
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Installation plan</td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Planning solutions (2-3 options)</td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Lighting plan</td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Flooring plan</td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Heating floor laying scheme</td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Air conditioner zones layout</td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">3D visualization of all rooms</td>
                                    <td className="table__col">
                                        <span className="table__text base base_regular">simplified</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Visualization of each room (3-4 angles)</td>
                                    <td className="table__col">
                                    </td>
                                    <td className="table__col">
                                    </td>
                                    <td className="table__col">
                                        <span className="table__check">Available</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular">Terms</td>
                                    <td className="table__col">
                                        <span className="table__text base base_regular">10 days</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__text base base_regular">20 days</span>
                                    </td>
                                    <td className="table__col">
                                        <span className="table__text base base_regular">30 days</span>
                                    </td>
                                </tr>
                                <tr className="table__row">
                                    <td className="table__col base base_regular"></td>
                                    <td className="table__col">
                                        <button className="btn-reset btn btn_size-small btn_theme-outline table__btn">send request</button>
                                    </td>
                                    <td className="table__col">
                                        <button className="btn-reset btn btn_size-small btn_theme-outline table__btn">send request</button>
                                    </td>
                                    <td className="table__col">
                                        <button className="btn-reset btn btn_size-small btn_theme-outline table__btn">send request</button>
                                    </td>
                                </tr>  
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default Pricing;