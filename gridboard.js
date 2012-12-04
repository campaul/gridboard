(function($) {
    
    function repaint() {
        $('[data-gridboard="true"]').each(function() {
            var xScale = $(document).width() / $(this).attr('data-grid-width'),
                yScale = $(document).height() / $(this).attr('data-grid-height'),
                x = $(this).attr('data-x') * xScale,
                y = $(this).attr('data-y') * yScale,
                width = $(this).attr('data-width') * xScale,
                height =  $(this).attr('data-height') * yScale;
                
                $(this).offset({
                    left: x,
                    top: y
                }).width(width).height(height);
        });
    }
    
    $.fn.grid = function(width, height) {
        this.attr({
            'data-gridboard': true,
            'data-grid-width': width,
            'data-grid-height': height
        });
        
        return this;
    };
    
    $.fn.place = function(x, y, width, height) {
        this.attr({
            'data-gridboard': true,
            'data-x': x,
            'data-y': y,
            'data-width': width,
            'data-height': height
        });
        
        repaint();
        
        return this;
    };
    
    window.gridboard = function(url) {
        var board = $('<iframe>').attr('src', url);
        
        $(document.body).append(board);
        
        return board;
    };
    
    $(window).resize(function() {
        repaint();
    });
    
})(jQuery);