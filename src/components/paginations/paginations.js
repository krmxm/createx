import { Component } from 'react';

import './paginations.scss';

import { ReactComponent as Arrow } from '../../assets/img/icons/arrow-paginations.svg';


class Paginations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowActive: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage || prevProps.totalPages !== this.props.totalPages) {
            if (this.props.totalPages === this.props.currentPage + 1) {
                this.setState({ arrowActive: false });
            } else {
                this.setState({ arrowActive: true });
            }
        }
    }

    renderPaginationItem = (totalPages, onPageChange, currentPage, classForPaginationsItem) => {
        let items = Array.from({ length: totalPages }, (_, index) => (
            <li
                key={index}
                className={`large large_bold paginations-item ${classForPaginationsItem} ${index === currentPage ? `${classForPaginationsItem}_active` : ''}`}
            >
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange(index);
                    }}
                    className={index === currentPage ? 'pagination-link_active' : 'pagination-link'}
                >
                    {index + 1}
                </a>
            </li>
        ));
        // 

        // console.log(items)

        return items;

    }

    renderPaginationsArrow = (totalPages, currentPage, handlePageClick) => {
        const classForArrow = this.state.arrowActive ? 'paginations-item' : 'paginations-item paginations-item_disabled';

        return (
            <li
                key={totalPages}
                className={classForArrow}
            >
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(currentPage + 1);
                    }}
                    className='paginations-arrow-link'
                >
                    <Arrow className='paginations-arrow' />
                </a>
            </li>
        );
    }


    render() {
        const { totalPages, handlePageClick, currentPage, classForPaginationsList, classForPaginationsItem } = this.props;
        const { arrowActive } = this.state;
        return (
            <ul className={`paginations-list ${classForPaginationsList}`}>
                {this.renderPaginationItem(totalPages, handlePageClick, currentPage, classForPaginationsItem)}
                {this.renderPaginationsArrow(totalPages, currentPage, handlePageClick)}
            </ul>
        )
    }
}

export default Paginations;