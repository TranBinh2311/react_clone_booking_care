import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import './HandBook.scss'
import { connect } from 'react-redux';
import Slider from "react-slick";


class HandBook extends Component {

    render() {
        return (
            <>
                <div className="section-share section_handbook">
                     <div className="section__container">
                         <div className = "section__content-header">
                                <div className= "section__content-header--left"> Cẩm nang</div>
                                <div className= "section__content-header--right"> Xem thêm</div>
                         </div>
                         <div className = "section__content-slider">
                                <Slider {...this.props.settings}>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_handbook"></div>
                                            <div className="section__content-item--title" >Cơ xương khớp 1</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_handbook" ></div>
                                            <div className="section__content-item--title" >Cơ xương khớp 2</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_handbook" ></div>
                                            <div className="section__content-item--title" >Cơ xương khớp 3</div>
                                        </div>
                                        <div className="section__content-item">
                                             <div className="section__content-item--img section_handbook"></div>
                                            <div className="section__content-item--title">Cơ xương khớp 4</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_handbook" ></div>
                                            <div className="section__content-item--title">Cơ xương khớp 5</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_handbook"></div>
                                            <div className="section__content-item--title">Cơ xương khớp 6</div>
                                        </div>
                                </Slider>
                         </div>
                        
                    </div>
                </div>
            </>
            
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
