jQuery('#activity').trigger('click');

jQuery('.leftNavSubHeader').each(function(){

	var $this = $(this);
	var index = $(this).index();
	var text  = $(this).text();

	if (text.indexOf('Current Offers') > 0) {
		console.log('found CurrOff and it is at ' + index);
	}

	if (text.indexOf('Activity') > 0) {
		console.log('found Activity and it is at ' + index);

		var $links = $this.next();
		var $target = $('#ecomm_refineNav .nav').eq(0);

		$('#activity').hide();
		$('#activityMore').insertAfter($target);
		$links.insertAfter($target);
		$this.insertAfter($target);

	}

	if (text.indexOf('Brand') > 0) {
		console.log('found this and it is at ' + index);
	}

});

jQuery('body').append('<div id="PD-bubble">For better search results, make sure to <strong>Narrow by Activity</strong> first!</div>');