(function($){
    $(document).ready(function(){

        var page = 0;
        var pages = 0;
        var num = 0;
        var limit = 0;
        var online = null;
        var $next = $('#next');
        var $prev = $('#prev');
        var $pending = $('#status-pending');
        var $online = $('#status-online');
        var $offline = $('#status-offline');

        // check the online status
        setInterval(function(){

            $.ajax({
                url: '/api/status',
                type: 'GET',
                success: function(data){
                    if(data === true){
                        $online.removeClass('hidden');
                        $offline.addClass('hidden');
                        $pending.addClass('hidden');
                    }else if(data === false){
                        $online.addClass('hidden');
                        $offline.removeClass('hidden');
                        $pending.addClass('hidden');
                    }
                },
                error: function(data) {
                    $online.addClass('hidden');
                    $offline.addClass('hidden');
                    $pending.removeClass('hidden');
                }
            });
        }, 500);

        var loadPageContent = function(callback){

            $.get('/api/outages?p='+page, function(data){

                var outages = data.outages;
                num = data.count;
                limit = data.limit;
                online = data.online;
                pages = Math.ceil(data.count / data.limit);

                $('#outages tbody').html('');

                $.each(outages, function(index, outage){

                    var date = new Date(outage.begin);
                    var datestring = date.toLocaleString('de-DE');

                    var duration = outage.end - outage.begin;

                    $('#outages tbody').append('<tr><td class="p-2">'+datestring+'</td><td class="p-2 text-right">'+parseInt(duration / 1000)+'s</td></tr>');
                });

                callback();
            });
        };

        // update button visibility
        var updateButtons = function(){

            $next.removeClass('hidden');
            $prev.removeClass('hidden');

            if(page + 1 >= pages){
                $next.addClass('hidden');
            }

            if(page == 0){
                $prev.addClass('hidden');
            }
        };

        // click on the next button
        $next.click(function(e){
            page += 1;
            $next.addClass('hidden');
            $prev.addClass('hidden');
            loadPageContent(function(){
                updateButtons();
            });
        });

        // click on the prev button
        $prev.click(function(e){
            page -= 1;
            $next.addClass('hidden');
            $prev.addClass('hidden');
            loadPageContent(function(){
                updateButtons();
            });
        });

        loadPageContent(function(){
            updateButtons();
        });
    });
})(jQuery);
