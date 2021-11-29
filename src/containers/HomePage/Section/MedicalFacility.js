import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";


class MedicalFacility extends Component {

    render() {

        return (
            <>
                <div className="section-share section_medical-facility">
                     <div className="section__container">
                         <div className = "section__content-header">
                                <div className= "section__content-header--left"> Cơ sở y tế nổi bật</div>
                                <div className= "section__content-header--right"> Xem thêm</div>
                         </div>
                         <div className = "section__content-slider">
                                <Slider {...this.props.settings}>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_medical-facility"></div>
                                            <div className="section__content-item--title" >Hệ thống y tế Thu Cúc 1</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_medical-facility" ></div>
                                            <div className="section__content-item--title" >Hệ thống y tế Thu Cúc 2</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_medical-facility" ></div>
                                            <div className="section__content-item--title" >Hệ thống y tế Thu Cúc 3</div>
                                        </div>
                                        <div className="section__content-item">
                                             <div className="section__content-item--img section_medical-facility"></div>
                                            <div className="section__content-item--title">Hệ thống y tế Thu Cúc 4</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_medical-facility" ></div>
                                            <div className="section__content-item--title">Hệ thống y tế Thu Cúc 5</div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--img section_medical-facility"></div>
                                            <div className="section__content-item--title">Hệ thống y tế Thu Cúc 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
