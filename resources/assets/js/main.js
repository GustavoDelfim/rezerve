Main = {
    init: function(){

        const _win = $(window);

        _win.scroll(function(){

            const header = $('#header');

            if(_win.scrollTop() > 20){
                header.addClass('active');
            } else {
                header.removeClass('active');
            }
        }).trigger('scroll')

    }
};

Main.init();

