var ajax = (filename) => {
    var res;
    $.ajax({
        url: `${filename}.txt`,
        dataType: "text",
        success: function(data) {
            res = data;
        },
        async: false
    });
    return res;
}
console.log(ajax('content'));
$('.content article').html(`<p>${ajax('content').replace(/\\n/g, '</p><p>').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/&/g, '&amp;')}</p>`);
var backpos = $('.content .back').css('top');
$(window).scroll(() => {
    $('.content .back').css('top', `${Number(backpos.substring(0, backpos.length - 2)) + $(window).scrollTop()}px`)
});