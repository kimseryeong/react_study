import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentClass extends Component{
    
    /**
    * <클래스 내부에서 defaultProps, propTypes 설정>
    * static defaultProps = { name: '<기본이름>' };
    * static propTypes = { 
    *      name: PropTypes.string
    *      ,favoriteFruit: PropTypes.string.isRequired
    * };
    */

    render(){
        //distructuring assignment
        const {name, favoriteFruit, children} = this.props;

        return (
            <div>
                안녕 ! 나는 { name }이야 😽 <br/>
                children 값은 { children } ! <br/>
                내가 제일 좋아하는 과일은 { favoriteFruit } 이거야 🔥
            </div>
        );
    };
}

MyComponentClass.defaultProps = {
    name: '<기본 이름>'
};

MyComponentClass.propTypes = {
    name: PropTypes.string
    ,favoriteFruit: PropTypes.string.isRequired
};

export default MyComponentClass;