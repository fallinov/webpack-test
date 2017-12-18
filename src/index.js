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
        $('.scrollspy').scrollSpy();

        //Table des matières flottante
        setTimeout(function() {
            var tocWrapperHeight = 260; // Max height of ads.
            var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
            var socialHeight = 95; // Height of unloaded social media in footer.
            var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
            var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

            var pushpinObj = {
                bottom: bottomOffset
            };

            if ($('nav').length) {
                pushpinObj.top = $('nav').height();

            } else if ($('#index-banner').length) {
                pushpinObj.top = $('#index-banner').height();

            } else {
                pushpinObj.top = 0;
            }

            if ($('.fixed-announcement').length) {
                pushpinObj.top += 48;
            }

            $('.toc-wrapper').pushpin(pushpinObj);
        }, 100);



        /*$('.maticon').html('<img src="' + Icon + '">');

        $('.maticon').append('<img src="' + img5k + '">');

        $('#download-button').click(printMe);

        $('body')
            .append('<img src="' + img5k + '">')
            .click(printMe);
        */
    }); // end of document ready
})(jQuery); // end of jQuery name space