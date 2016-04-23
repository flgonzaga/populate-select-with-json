/* 
 * Author: Fabio Gonzaga
 * https://github.com/flgonzaga/
 */

(function ($) {

    $('select[data-source]').each(function () {
        var $this = $(this);
        var remoteJSON = $this.attr('data-source');
        $.getJSON(remoteJSON, function (data) {
            $.each(data, function (optionValue, optionText) {
                var selected = ($this.attr('data-selected') == optionValue) ? 'selected' : '';
                $this.append('<option value="' + optionValue + '" ' + selected + '>' + optionText + '</option>');
            });
        });
    });

})(jQuery);
