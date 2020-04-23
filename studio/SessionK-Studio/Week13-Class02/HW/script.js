$(document).ready(function () {
    $('#container').mousemove(function (e) {
        var mousePosX = (e.pageX / $(window).width()) * 100;
        $('#container').css('background-position-x', mousePosX + '%');
        var mousePosY = (e.pageY / $(window).height()) * 100;
        $('#container').css('background-position-y', mousePosY + '%');
        console.log(mousePosX, mousePosY);
    });
});


function playAudio(url) {
    new Audio(url).play();
}
