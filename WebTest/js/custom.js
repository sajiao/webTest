/*global jQuery:false */
jQuery(document).ready(function ($) {
    "use strict";


    (function () {

        var $menu = $('.navigation nav'),
			optionsList = '<option value="" selected>Go to..</option>';

        $menu.find('li').each(function () {
            var $this = $(this),
				$anchor = $this.children('a'),
				depth = $this.parents('ul').length - 1,
				indent = '';

            if (depth) {
                while (depth > 0) {
                    indent += ' - ';
                    depth--;
                }

            }
            $(".nav li").parent().addClass("bold");

            optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
        }).end()
		.after('<select class="selectmenu">' + optionsList + '</select>');

        $('select.selectmenu').on('change', function () {
            window.location = $(this).val();
        });

    })();

    //Navi hover
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });

});