


$(document).ready(function(){
				$("i.fa-plus").click(function(){ 
					$(this).removeClass('fa-plus').addClass('fa-minus');
					$(this).parent('a').parent('div').parent('div.box-header').siblings('div.box_content').toggle(400);
				});
				
				$("i.fa-minus").click(function(){ 
					console.log('Click by js');
					$(this).removeClass('fa-minus').addClass('fa-plus');
					$(this).parent('a').parent('div').parent('div.box-header').siblings('div.box_content').toggle(400);
				});
				
				$('.closed').click(function(){
					$(this).parent('div').parent('div.box-header').parent('div.boxs').hide();
					//$(indexs).hide();
				});
				
				/*================= CHEKBOX JS START FROM HERE ===========================*/
				/* $("#checkbox9").click(function () {
							var getAttr = $('#checkbox6').attr(id);					 
								if ($(getAttr).is(":checked")) {
									$('.boxs').show();
								} else {
									$('.boxs').hide();
								}
							});*/
				 
				 	$('input[type="checkbox"]').click(function(){
						//$('.boxs').hide();
						var sa= $(this).attr('id');
						
						if ($(sa).is(":checked")) {
								$(this).show();
							} else {
								$(this).hide();
							}
						console.log(sa);
						var index = sa.replace("checkbox","");
						console.log(index);
						var  divref = '#box_' + index;
							console.log(divref);
							
							//$(divref).children('div.box-header').children('div').children('a.sideLinks').children('i.fa-minus').click();
							$(divref).toggle(400 , function(){
									$(this).find('div.box_content').show();					 
       // alert("The paragraph is now hidden");
    });
							
						});
								
					}); // ready function end here


$(document).ready(function () {
	/* Get the checkboxes values based on the class attached to each check box */
	/*$("#buttonClass").click(function() {
	    getValueUsingClass();
	});*/
	
	
});

function getValueUsingClass(){
	/* declare an checkbox array */
	var chkArray = [];
	
	/* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	$(".chk:checked").each(function() {
		chkArray.push($(this).val());
	});
	
	/* we join the array separated by the comma */
	var selected;
	selected = chkArray.join(',') ;
	
	/* check if there is selected checkboxes, by default the length is 1 as it contains one single comma */
	if(selected.length > 0){
		alert("You have selected " + selected);	
	}else{
		alert("Please at least check one of the checkbox");	
	}
}


/*================= HIDE AND SHOW JS START FROM HERE ===========================*/
/*$(document).ready(function(){
				$("#hideBox").click(function(){ 
					$(".sideLinks i").removeClass('fa fa-minus').addClass('fa fa-plus');
					$(".box_content").toggle(400);
					$(".sideLinks i").removeClass('fa fa-minus').addClass('fa fa-plus');
				});
				
				
				// HIDE THE BOX WHEN USER CLICK ON CROSS BUTTON
				$('.closed').click(function(){
					$(this).parent('div').parent('div.box-header').parent('div.boxs').hide();
				});
				
			});*/


/*==================== DATE JS START FROM HERE ========================*/
//<![CDATA[
    $(function () {
        $('#wrapper .version strong').text('v' + $.fn.pignoseCalendar.version);

        function onSelectHandler(date, context) {
            var $element = context.element;
            var $calendar = context.calendar;
            var $box = $element.siblings('.box').show();
            var text = 'You selected date ';

            if (date[0] !== null) {
                text += date[0].format('YYYY-MM-DD');
            }

            if (date[0] !== null && date[1] !== null) {
                text += ' ~ ';
            }
            else if (date[0] === null && date[1] == null) {
                text += 'nothing';
            }

            if (date[1] !== null) {
                text += date[1].format('YYYY-MM-DD');
            }

            $box.text(text);
        }

        function onApplyHandler(date, context) {
           
            var $element = context.element;
            var $calendar = context.calendar;
            var $box = $element.siblings('.box').show();
            var text = 'You applied date ';

            if (date[0] !== null) {
                text += date[0].format('YYYY-MM-DD');
            }

            if (date[0] !== null && date[1] !== null) {
                text += ' ~ ';
            }
            else if (date[0] === null && date[1] == null) {
                text += 'nothing';
            }

            if (date[1] !== null) {
                text += date[1].format('YYYY-MM-DD');
            }

            $box.text(text);
        }

        // Default Calendar
        $('.calendar').pignoseCalendar({
            select: onSelectHandler
        });

        // Input Calendar
        $('.input-calendar').pignoseCalendar({
            apply: onApplyHandler,
            buttons: true, // It means you can give bottom button controller to the modal which be opened when you click.
        });

        // Calendar modal
        var $btn = $('.btn-calendar').pignoseCalendar({
            apply: onApplyHandler,
            modal: true, // It means modal will be showed when you click the target button.
            buttons: true
        });

        // Color theme type Calendar
        $('.calendar-dark').pignoseCalendar({
            theme: 'dark', // light, dark, blue
            select: onSelectHandler
        });

        // Blue theme type Calendar
        $('.calendar-blue').pignoseCalendar({
            theme: 'blue', // light, dark, blue
            select: onSelectHandler
        });

        // Schedule Calendar
        $('.calendar-schedules').pignoseCalendar({
            scheduleOptions: {
                colors: {
                    holiday: '#2fabb7',
                    seminar: '#5c6270',
                    meetup: '#ef8080'
                }
            },
            schedules: [{
                name: 'holiday',
                date: '2017-08-08'
            }, {
                name: 'holiday',
                date: '2017-09-16'
            }, {
                name: 'holiday',
                date: '2017-10-01',
            }, {
                name: 'holiday',
                date: '2017-10-05'
            }, {
                name: 'holiday',
                date: '2017-10-18',
            }, {
                name: 'seminar',
                date: '2017-11-14'
            }, {
                name: 'seminar',
                date: '2017-12-01',
            }, {
                name: 'meetup',
                date: '2018-01-16'
            }, {
                name: 'meetup',
                date: '2018-02-01',
            }, {
                name: 'meetup',
                date: '2018-02-18'
            }, {
                name: 'meetup',
                date: '2018-03-04',
            }, {
                name: 'meetup',
                date: '2018-04-01'
            }, {
                name: 'meetup',
                date: '2018-04-19',
            }],
            select: function (date, context) {
                var message = `You selected ${(date[0] === null ? 'null' : date[0].format('YYYY-MM-DD'))}.
							   <br />
							   <br />
							   <strong>Events for this date</strong>
							   <br />
							   <br />
							   <div class="schedules-date"></div>`;
                var $target = context.calendar.parent().next().show().html(message);

                for (var idx in context.storage.schedules) {
                    var schedule = context.storage.schedules[idx];
                    if (typeof schedule !== 'object') {
                        continue;
                    }
                    $target.find('.schedules-date').append('<span class="ui label default">' + schedule.name + '</span>');
                }
            }
        });

        // Multiple picker type Calendar
        $('.multi-select-calendar').pignoseCalendar({
            multiple: true,
            select: onSelectHandler
        });

        // Toggle type Calendar
        $('.toggle-calendar').pignoseCalendar({
            toggle: true,
            select: function (date, context) {
                var message = `You selected ${(date[0] === null ? 'null' : date[0].format('YYYY-MM-DD'))}.
                                <br />
                                <br />
                                <strong>Events for this date</strong>
                                <br />
                                <br />
                                <div class="active-dates"></div>`;
                var $target = context.calendar.parent().next().show().html(message);

                for (var idx in context.storage.activeDates) {
                    var date = context.storage.activeDates[idx];
                    if (typeof date !== '<span class="ui label"><i class="fas fa-code"></i>string</span>') {
                        continue;
                    }
                    $target.find('.active-dates').append('<span class="ui label default">' + date + '</span>');
                }
            }
        });

        // Disabled date settings.
        (function () {
            // IIFE Closure
            var times = 30;
            var disabledDates = [];
            for (var i = 0; i < times; /* Do not increase index */) {
                var year = moment().year();
                var month = 0;
                var day = parseInt(Math.random() * 364 + 1);
                var date = moment().year(year).month(month).date(day).format('YYYY-MM-DD');
                if ($.inArray(date, disabledDates) === -1) {
                    disabledDates.push(date);
                    i++;
                }
            }

            disabledDates.sort();

            var $dates = $('.disabled-dates-calendar').siblings('.guide').find('.guide-dates');
            for (var idx in disabledDates) {
                $dates.append('<span>' + disabledDates[idx] + '</span>');
            }

            $('.disabled-dates-calendar').pignoseCalendar({
                select: onSelectHandler,
                disabledDates: disabledDates
            });
        }());

        // Disabled Weekdays Calendar.
        $('.disabled-weekdays-calendar').pignoseCalendar({
            select: onSelectHandler,
            disabledWeekdays: [0, 6]
        });

        // Disabled Range Calendar.
        var minDate = moment().set('dates', Math.min(moment().day(), 2 + 1)).format('YYYY-MM-DD');
        var maxDate = moment().set('dates', Math.max(moment().day(), 24 + 1)).format('YYYY-MM-DD');
        $('.disabled-range-calendar').pignoseCalendar({
            select: onSelectHandler,
            minDate: minDate,
            maxDate: maxDate
        });

        // Multiple Week Select
        $('.pick-weeks-calendar').pignoseCalendar({
            pickWeeks: true,
            multiple: true,
            select: onSelectHandler
        });

        // Disabled Ranges Calendar.
        $('.disabled-ranges-calendar').pignoseCalendar({
            select: onSelectHandler,
            disabledRanges: [
                ['2016-10-05', '2016-10-21'],
                ['2016-11-01', '2016-11-07'],
                ['2016-11-19', '2016-11-21'],
                ['2016-12-05', '2016-12-08'],
                ['2016-12-17', '2016-12-18'],
                ['2016-12-29', '2016-12-30'],
                ['2017-01-10', '2017-01-20'],
                ['2017-02-10', '2017-04-11'],
                ['2017-07-04', '2017-07-09'],
                ['2017-12-01', '2017-12-25'],
                ['2018-02-10', '2018-02-26'],
                ['2018-05-10', '2018-09-17'],
            ]
        });

        // I18N Calendar
        $('.language-calendar').each(function () {
            var $this = $(this);
            var lang = $this.data('lang');
            $this.pignoseCalendar({
                lang: lang
            });
        });

        // This use for DEMO page tab component.
        $('.menu .item').tab();
    });