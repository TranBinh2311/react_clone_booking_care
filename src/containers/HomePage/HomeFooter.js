import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { deprecationHandler } from 'moment';

class HomeFooter extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
          };
        return (
            <div className= "home-footer__container">
                <p>&copy; 2021 by Trần Văn Bính. More information, please contact to my Facebook.<a className= "home-footer__container-info" href="https://www.facebook.com/profile.php?id=100015374085386"> Click here! </a> </p>
            </div>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
