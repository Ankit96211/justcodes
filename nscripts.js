
function readFile(input) {
  $(".dropzone-wrapper").addClass('d-none');
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var htmlPreview =
        '<img class="img-fluid" src="' + e.target.result + '" />' +
        '<p>' + input.files[0].name + '</p>';
      var wrapperZone = $(input).parent();
      var previewZone = $(input).parent().parent().find('.preview-zone');
      var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

      wrapperZone.removeClass('dragover');
      $('.remove-preview').removeClass('d-none');
      previewZone.removeClass('hidden');
      boxZone.empty();
      boxZone.removeClass('d-none');
      boxZone.append(htmlPreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
$('.image-btn').click(function() {
  var src="./assets/"+$(this).attr('img');
  $('#output-image').attr('src',src);
  $('#imageModal').modal();
  // alert($(this).attr('img'));
});
function reset(e) {
  $('.remove-preview').addClass('d-none');
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}

$(".dropzone").change(function() {
  readFile(this);
});

$('.dropzone-wrapper').on('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass('dragover');
});

$('.remove-preview').on('click', function() {
  var boxZone = $(this).parents('.preview-zone').find('.box-body');
  var dropzone = $(this).parents('.form-group').find('.dropzone');
  boxZone.empty();
  $('.box-body').addClass('d-none');
  $(".dropzone-wrapper").removeClass('d-none');
  reset(dropzone);
});
$('.image-form').submit(function(){
  $('.image-form').addClass('d-none');
  $('#status').removeClass('d-none');
});
