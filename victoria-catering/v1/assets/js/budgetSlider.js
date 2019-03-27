// $('#budget').change(function() {
//
// });
$(document).ready(function() {
    $('#budgetValue').text($('#budget').val());
    $('#budget').on('input', function() {
        $('#budgetValue').text($('#budget').val());
    });
});
