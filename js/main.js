"use strict";
$.fn.datepicker.dates['en'] = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    daysShort: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    daysMin: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    dateFormat: 'dd, mm, yyyy',
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Fe", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    weekStart: 0
};

(function() {
 $('.functions article p').matchHeight();
 $('.functions article h2').matchHeight();
 $('.projects .info h2').matchHeight();
 $('.projects .info p').matchHeight();
}());

$('.search-box').magnificPopup({
 type: 'inline',
 delegate: 'a',
 removalDelay: 500,
 callbacks: {
  open: function() {
    this.currItem.inlineElement.find('.input-holder-calendar input').datepicker();
   	this.currItem.inlineElement.find('.input-holder-calendar .calendar').on('click', function() {
    $('.input-holder-calendar input').focus();
   });
   searchInputFocus();
   showToday();
  },
  beforeOpen: function() {
            this.st.mainClass = this.st.mainClass + ' hide-close-btn mfp-zoom-in';

            setTimeout(function() {
                customClosePopup();
            }, 100);
        }
 }
});
function customClosePopup() {
    $('.mfp-wrap .custom-close-btn').on('click', function() {
        $.magnificPopup.close();
    });
}

$('.calendar').datepicker();

function showToday() {
 $('input.date-pick, .input-daterange, .date-pick-inline, #checkout-field').datepicker({
     todayHighlight: true
 });
}

function searchInputFocus() {
 var serchButton = $('.search-button');

 serchButton.on('click', function () {
  var input = $(this).closest('.input-holder-popup').find('.input-search');
  input.focus();
 });
}