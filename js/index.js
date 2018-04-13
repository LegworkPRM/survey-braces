// Minified for output
// $('.yes-no').click(function(){$('.yes-no-clicked').removeClass('yes-no-clicked');$(this).addClass('yes-no-clicked')});$('.checkmark').click(function(){$(this).toggleClass('checkmark-clicked')});$('.option-container').click(function(){$('.option-container-clicked').removeClass('option-container-clicked');$(this).addClass('option-container-clicked')});$('.option-container-type-2').click(function(){$('.option-container-type-2-clicked').removeClass('option-container-type-2-clicked');$(this).addClass('option-container-type-2-clicked')})


// When yes-no div is clicked...
$('.yes-no').click(function() {
  // Remove the class 'yes-no-clicked' from any items that currently have it applied
  $('.yes-no-clicked').removeClass('yes-no-clicked');
  // Add the class 'yes-no-clicked' to the object that was clicked
  $(this).addClass('yes-no-clicked');
});

// When a checkmark is clicked...
$('.checkmark').click(function() {
  // Toggle the class 'checkmark-clicked'
  $(this).toggleClass('checkmark-clicked');
});

// When an .option-container is clicked...
$('.option-container').click(function() {
  // Remove the class 'option-container-clicked' from any items that currently have it applied
  $('.option-container-clicked').removeClass('option-container-clicked');
  // Add the class 'option-container-clicked' to the object that was clicked
  $(this).addClass('option-container-clicked');
});
$('.option-container-type-2').click(function() {
  $('.option-container-type-2-clicked').removeClass('option-container-type-2-clicked');
  $(this).addClass('option-container-type-2-clicked');
});