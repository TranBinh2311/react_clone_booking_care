import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";


class OutStandingDoctor extends Component {

    render() {

        return (
            <>
                <div className="section-share section_outstanding-doctor">
                     <div className="section__container">
                         <div className = "section__content-header">
                                <div className= "section__content-header--left"> Bác sĩ nổi bật tuần qua</div>
                                <div className= "section__content-header--right"> Xem thêm</div>
                         </div>
                         <div className = "section__content-slider">
                                <Slider {...this.props.settings}>
                                        <div className="section__content-item">
                                            <div className="section__content-item--outner">
                                                 <div className="section__content-item--img section_outstanding-doctor"></div>
                                            </div>
                                           
                                            <div className="section__content-item--title">
                                                 <div className="section__content-item--name" >Phó giáo sư, Tiến Sỹ Trần Văn Bính</div>
                                                 <div className="section__content-item--des" >Điện - Tự Đông Hoá</div>
                                            </div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--outner">
                                                 <div className="section__content-item--img section_outstanding-doctor"></div>
                                            </div>
                                           
                                            <div className="section__content-item--title">
                                                 <div className="section__content-item--name" >Phó giáo sư, Tiến Sỹ Trần Văn Bính</div>
                                                 <div className="section__content-item--des" >Điện - Tự Đông Hoá</div>
                                            </div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--outner">
                                                 <div className="section__content-item--img section_outstanding-doctor"></div>
                                            </div>
                                           
                                            <div className="section__content-item--title">
                                                 <div className="section__content-item--name" >Phó giáo sư, Tiến Sỹ Trần Văn Bính</div>
                                                 <div className="section__content-item--des" >Điện - Tự Đông Hoá</div>
                                            </div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--outner">
                                                 <div className="section__content-item--img section_outstanding-doctor"></div>
                                            </div>
                                           
                                            <div className="section__content-item--title">
                                                 <div className="section__content-item--name" >Phó giáo sư, Tiến Sỹ Trần Văn Bính</div>
                                                 <div className="section__content-item--des" >Điện - Tự Đông Hoá</div>
                                            </div>
                                        </div>
                                        <div className="section__content-item">
                                            <div className="section__content-item--outner">
                                                 <div className="section__content-item--img section_outstanding-doctor"></div>
                                            </div>
                                           
                                            <div className="section__content-item--title">
                                                 <div className="section__content-item--name" >Phó giáo sư, Tiến Sỹ Trần Văn Bính</div>
                                                 <div className="section__content-item--des" >Điện - Tự Đông Hoá</div>
                                            </div>
                                        </div>
                                        <div className="section__content-item">
                                             <div className="section__content-item--outner">
                                                 <div className="section__content-item--img section_outstanding-doctor"></div>
                                            </div>
                                           
                                            <div className="section__content-item--title">
                                                 <div className="section__content-item--name" >Phó giáo sư, Tiến Sỹ Trần Văn Bính</div>
                                                 <div className="section__content-item--des" >Điện - Tự Đông Hoá</div>
                                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
