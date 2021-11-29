import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import './About.scss'
import { connect } from 'react-redux';
import Slider from "react-slick";


class About extends Component {

    render() {
        return (
            <>
                <div className="section-share section_about">
                    
                    <div className= "section-about__content">
                         <div className= "section-about__content-left">
                              <div className= "section-about__content-left--header">
                                  Truyền thông nói về Trần Văn Bính
                              </div>
                              <iframe width="100%" height="340px" 
                              src="https://www.youtube.com/embed/HOKVdR5U1RM" 
                              title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen>
                              </iframe>
                         </div>

                         <div className= "section-about__content-right">
                             <span className= "section-about__content-right--content"> 
                             Albert Einstein là nhà vật lý lý thuyết vĩ đại người Đức, “cha đẻ” của Thuyết Tương đối. Câu nói trên của ông đã thức tỉnh vô số người. Chẳng ai dám vỗ ngực tự nhận mình là một người hoàn hảo chưa từng phạm lỗi. Nếu ngày nào đó có người tự nhận mình chưa có lỗi lầm thì chắc chắn rằng họ chưa từng thử làm việc gì và họ vẫn chìm vào những ảo tưởng. Không ai sinh ra có thể làm tốt hết mọi việc, mỗi người đều có thể mắc lỗi nhỏ hoặc lớn, nhiều hay ít. Bạn có thể mắc lỗi lầm nhưng không sao quan trọng là bạn nhận ra và sửa chữa chúng.
                             </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
