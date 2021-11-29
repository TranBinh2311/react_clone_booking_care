import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  './HomeHeader.scss'
import {FormattedMessage} from 'react-intl'
import { LANGUAGE } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) =>{
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        // console.log('check props', this.props);
        let language = this.props.language;
        return (
            <>
                <div className="home-header__container">
                    <div className="home-header__content">
                        <div className= "home-header__content-left">
                            <i className= "fas fa-bars home-header__content-icon"> </i>
                            <div className= "home-header__content-logo"></div>
                        </div>
                        {/*  */}
                        <div  className= "home-header__content-center">
                            <div className= "home-header__content-center-child">
                                <div><b> <FormattedMessage id = "home-header.speacility"/> </b></div>
                                <div className= "child-sub-title" ><FormattedMessage id = "home-header.searchdoctor"/></div>
                            </div>

                            <div className= "home-header__content-center-child">
                                <div><b> <FormattedMessage id = "home-header.health-facility"/> </b></div>
                                <div className= "child-sub-title"><FormattedMessage id = "home-header.select-room"/></div>
                            </div>

                            <div className= "home-header__content-center-child">
                                <div><b> <FormattedMessage id = "home-header.doctor"/> </b></div>
                                <div className= "child-sub-title" ><FormattedMessage id = "home-header.select-doctor"/></div>
                            </div>

                            <div className= "home-header__content-center-child">
                                <div><b><FormattedMessage id = "home-header.fee"/> </b></div>
                                <div className= "child-sub-title" ><FormattedMessage id = "home-header.checkhealth"/></div>
                            </div>
                        </div>
                        {/*  */}
                        <div  className= "home-header__content-right">
                            <div className= "home-header__content-right-icon"> <i className= "fas fa-question-circle"> </i> </div>
                            <div className= "home-header__content-right-title"> <span><FormattedMessage id = "home-header.support"/> </span></div>
                            <div className= "support">
                                <div className= {language === LANGUAGE.VI? "language-vi active" : "language-vi"} ><span onClick= {()=>this.changeLanguage(LANGUAGE.VI)}>VI</span></div>
                                <div className= {language === LANGUAGE.EN? "language-en active" : "language-en"}><span onClick= {()=>this.changeLanguage(LANGUAGE.EN)}>EN</span></div>
                            </div>
                            
                        </div>
                        {/*  */}
                    </div>
                    <div className = "home-header__slide">                 
                        <div className = "home-header__slide-up">
                                <div className = "home-header__slide-title">
                                    <div className= "home-header__slide-title-1">Nền tảng y tế</div>
                                    <div className= "home-header__slide-title-2">Chăm sóc sức khoẻ toàn diện</div>
                                </div>
                                {/*  */}
                                <div className = "home-header__slide-search">
                                    <div> <i className="home-header__slide-search--icon fas fa-search"> </i></div>
                                    <div> 
                                        <input className =" home-header__slide-search--input" placeholder = " Nhập vào để tìm kiếm"/>
                                    </div>
                                </div>
                                {/*  */}
                               
                        </div>
                        <div className = "home-header__slide-down">
                                <div className = "home-header__slide-download">
                                    
                                </div>
                                {/*  */}
                                <div className = "home-header__slide-option">
                                    <div className = "home-header__slide-option-child">
                                        <div className = "home-header__slide-option-child--img">
                                            <i className ="fas fa-hospital-alt"></i>
                                        </div>
                                        <div className = "home-header__slide-option-child--title">
                                            Khám chuyên khoa
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className = "home-header__slide-option-child">
                                        <div className = "home-header__slide-option-child--img">
                                            <i className ="fas fa-mobile-alt"></i>
                                        </div>
                                        <div className = "home-header__slide-option-child--title"> Khám từ xa </div>
                                    </div >
                                    {/*  */}
                                    <div className = "home-header__slide-option-child">
                                        <div className = "home-header__slide-option-child--img">
                                            <i className ="fas fa-procedures"></i>    
                                        </div>
                                        <div className = "home-header__slide-option-child--title"> Khám tổng quát</div>
                                    </div >
                                    {/*  */}
                                    <div className = "home-header__slide-option-child">
                                        <div className = "home-header__slide-option-child--img">
                                            <i className ="fas fa-flask"></i>    
                                        </div>
                                        <div className = "home-header__slide-option-child--title"> Xét nghiệm y học</div>
                                    </div>
                                    {/*  */}
                                    <div className = "home-header__slide-option-child">
                                         <div className = "home-header__slide-option-child--img">
                                            <i className ="fas fa-user-md"></i>    
                                        </div>
                                        <div className = "home-header__slide-option-child--title"> Sức khoẻ tinh thần </div>
                                    </div>
                                    {/*  */}
                                    <div className = "home-header__slide-option-child">
                                        <div className = "home-header__slide-option-child--img">
                                            <i className ="fas fa-briefcase-medical"></i>    
                                        </div>
                                        <div className = "home-header__slide-option-child--title"> Khám nha khoa</div>
                                    </div>
                                    {/*  */}
                                </div>
                                {/*  */}
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
