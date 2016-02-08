function loadHeaderAndFooter(page) {
    $('header').load('/d2k/header.html', function() {
        $('li:contains(' + page + ')').first().addClass('active');
    });
    $('footer').load('/d2k/footer.html');
}

function loadGallery(){
    $('#gallery').load('/d2k/gallery.html');
}

function loadLongText(){
    $('longText').load('/d2k/lorem.html');
}