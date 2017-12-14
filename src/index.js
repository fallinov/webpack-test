//CSS
import 'material-design-icons/iconfont/material-icons.css';
//import 'materialize-css/dist/css/materialize.css';
import './style.scss';

//Librairies JS
import $ from 'jquery';
import 'materialize-css';
import Icon from './img/materialize_icon-400x400.png';
import img5k from './img/big_image.jpg';

(function($){
    $(function(){

        $('.button-collapse').sideNav();

        $('.maticon').html('<img src="' + Icon + '">');

        $('.maticon').append('<img src="' + img5k + '">');

    }); // end of document ready
})(jQuery); // end of jQuery name space