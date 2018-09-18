$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/**
 * Google Analytics
 */

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-125933587-1');

/**
 * Gallery
 */

blueimp.Gallery(
    [
        {
            title: 'Spring Showcase 2018: Haven\'t Met You Yet (Encore)',
            href: 'http://www.youtube.com/watch?v=6zPxJDZ3l_E',
            type: 'text/html',
            youtube: '6zPxJDZ3l_E',
            poster: 'http://img.youtube.com/vi/6zPxJDZ3l_E/maxresdefault.jpg'
        },
        {
            title: 'Spring Showcase 2018: Fix You',
            href: 'http://www.youtube.com/watch?v=mqeZPqhXiX8',
            type: 'text/html',
            youtube: 'mqeZPqhXiX8',
            poster: 'http://img.youtube.com/vi/mqeZPqhXiX8/maxresdefault.jpg'
        },
        {
            title: 'VCN 2017: If I Were A Boy',
            href: 'http://www.youtube.com/watch?v=gqJV592fr6E',
            type: 'text/html',
            youtube: 'gqJV592fr6E',
            poster: 'http://img.youtube.com/vi/gqJV592fr6E/maxresdefault.jpg'
        },
        {
            title: 'VCN 2016: Hello',
            href: 'http://www.youtube.com/watch?v=EUo-0jKmvOM',
            type: 'text/html',
            youtube: 'EUo-0jKmvOM',
            poster: 'http://img.youtube.com/vi/EUo-0jKmvOM/maxresdefault.jpg'
        },
        {
            title: 'Ariana Grande Medley',
            href: 'http://www.youtube.com/watch?v=JpeZV8XJhR4',
            type: 'text/html',
            youtube: 'JpeZV8XJhR4',
            poster: 'http://img.youtube.com/vi/JpeZV8XJhR4/maxresdefault.jpg'
        }
    ],
    {
        container: '#blueimp-gallery-carousel',
        carousel: true,
        youTubeClickToPlay: false,
        displayTransition: false
    }
);