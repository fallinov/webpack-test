//CSS
import 'material-design-icons/iconfont/material-icons.css';
//import 'materialize-css/dist/css/materialize.css';
import './style.scss';

import printMe from './print.js';

//Librairies JS
import $ from 'jquery';
import 'materialize-css';
import Icon from './img/materialize_icon-400x400.png';
import img5k from './img/big_image.jpg';
//import printMe from "./print";

(function($){
    $(function(){

        $('.button-collapse').sideNav();

        /*$('.maticon').html('<img src="' + Icon + '">');

        $('.maticon').append('<img src="' + img5k + '">');

        $('#download-button').click(printMe);

        $('body')
            .append('<img src="' + img5k + '">')
            .click(printMe);
        */
    }); // end of document ready
})(jQuery); // end of jQuery name space