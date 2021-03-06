#WP-Nebula

The WP Nebula is a springboard WordPress theme for developers. Inspired by the HTML5 Boilerplate, this theme creates the framework for development. Like other WordPress startup themes, it has custom functionality built-in (like shortcodes, styles, and JS/PHP functions), but unlike other themes the WP Nebula is not meant for the end-user.

Wordpress developers will find all source code not obfuscated, so everything may be customized and altered to fit the needs of the project. Additional comments have been added to help explain what is happening; not only is this framework great for speedy development, but it is also useful for learning advanced WordPress techniques.

##Installation

To install, simply download the .zip, extract its contents, and upload to the /themes directory via FTP.

##Setup

- Activate theme
- Rename theme in style.css (and update necessary style.css metadata)
- Move .htaccess to root (or combine with existing)
- Install prompted plugins (as needed)
- General Settings
	- Remove Tagline (Automated by initial activation)
	- Timezone "New York", or appropriate timezone (Automated by initial activation)
	- Week Starts On Sunday (Automated by initial activation)
- Reading Settings
	- Front page displays "A static page" > Front page: "Home" (Automated by initial activation)
	- Check "Discourage search engines from indexing this site" (Reading Settings)
- Permalinks Settings
	- Select "Post name" (Automated by initial activation)
- Set (at least) Primary Menu (Appearance > Menus [Create a menu, then:] > Manage Locations)
- Modify logo.svg and logo.png
- Apple touch icon (129x129px) *(Rounded corners and glossy effect are automatically applied.)*
- Open Graph metadata in header.php (and remove comments)
- Open Graph thumbnails *(Minimum Size: 560x560px with a 246px tall safezone in the center. Use og-temp.png as a template. Then delete from header.php!)*
- Windows 8 Tiles 
	- 128x128px "tiny.png"
	- 270x270px "square.png"
	- 558x270px "wide.png"
	- 517x516px "large.png"
- Google Analytics tracking number (functions.php)
- Strip out all unplanned HTML/CSS/JS (Do this before any other development! You can always add pieces back in from the Nebula.)
- *[Theme development goes here]*
- Specify styles for the WYSIWYG editor in style.css (as needed)
- Update screenshot.png (880x660px)
- Search for any remaining @TODO tags (use PHG Developer Info metabox on the Wordpress Dashboard)
- *[Testing](https://docs.google.com/document/d/17nmeSsa-4SSfX8bzWWUXcFDTyz3o2-oSgX4ayCgGm7Y/)*
- Uncheck "Discourage search engines from indexing this site" (Reading Settings)
- *[Launch/Migration](https://docs.google.com/document/d/1jEaImmelk5bitFdh01WU_vm0WctYfhYEAKNZfwWJY0M/)*
- (If using Facebook SDK): [Create Facebook app](https://smashballoon.com/custom-facebook-feed/access-token/)
- (If using Twitter Feed): [Create Twitter app for domain](https://apps.twitter.com/), add API/access tokens to /includes/grabtweets.php, and swap "url:" parameter in /js/libs/twitter.js
- Enable W3 Total Cache
- Post-Launch testing

##Recommended Plugins
When activated, WP Nebula will prompt to install the recommended and optional plugins. Following the instructions will install them all (or selected ones) at once. These can also be downloaded from Wordpress.org, or manually installed from the Wordpress Admin under the Plugins > Add New.
- [Admin Menu Tree Page View](http://wordpress.org/plugins/admin-menu-tree-page-view/)
- [Advanced Custom Fields](http://wordpress.org/plugins/advanced-custom-fields/)
- [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)
- [Contact Form 7](http://wordpress.org/plugins/contact-form-7/)
- [Contact Form 7 DB](http://wordpress.org/plugins/contact-form-7-to-database-extension/)
- [Regenerate Thumbnails](http://wordpress.org/plugins/regenerate-thumbnails/)
- [W3 Total Cache](http://wordpress.org/plugins/w3-total-cache/)
- [WP-PageNavi](http://wordpress.org/plugins/wp-pagenavi/)

##Optional Plugins
- [Custom Facebook Feed](https://wordpress.org/plugins/custom-facebook-feed/)
- [Search Everything](http://wordpress.org/plugins/search-everything/)
- [Smush.it](http://wordpress.org/plugins/wp-smushit/)
- [Really Simple CAPTCHA](http://wordpress.org/plugins/really-simple-captcha/)
- [Theme Check](https://wordpress.org/plugins/theme-check/)
- [WooCommerce](https://wordpress.org/plugins/woocommerce/)
- [Wordpress SEO by Yoast](http://wordpress.org/plugins/wordpress-seo/)
- [WP Edit](https://wordpress.org/plugins/wp-edit/)

##Included Libraries
#####HTML/CSS
- [Entypo](http://www.entypo.com/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Normalize](http://necolas.github.io/normalize.css/)

#####JavaScript
- [bxSlider](http://bxslider.com/)
- [CSS Browser Selector](http://cssbs.altervista.org/css-browser-selector.html)
- [DataTables](https://datatables.net/)
- [DoubleTapToGo](http://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly)
- [Gumby](http://gumbyframework.com/)
- [HTML5 Shiv](https://github.com/aFarkas/html5shiv)
- [jQuery](http://jquery.com/)
- [jQuery UI](http://jqueryui.com/)
- [Masked Input](http://digitalbush.com/projects/masked-input-plugin/)
- [Mmenu](http://mmenu.frebsite.nl/)
- [Modernizr](http://modernizr.com/)
- [Respond](https://github.com/scottjehl/Respond)

#####PHP
- [Mobile Detect](http://mobiledetect.net/)
- [TGM Plugin Activation](http://tgmpluginactivation.com/)

##Optional Libraries
#####JavaScript
- [Favico.js](http://lab.ejci.net/favico.js/)
- [HoverIntent](http://cherne.net/brian/resources/jquery.hoverIntent.html)
- [Skrollr](https://github.com/Prinzhorn/skrollr)

#####PHP
- [PHP Mailer](https://github.com/PHPMailer/PHPMailer)

##Included API Integrations
- [Facebook SDK for JavaScript](https://developers.facebook.com/docs/javascript)
- [Google Analytics (analytics.js)](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
- [Google Maps API](https://developers.google.com/maps/)
- [Twitter API](https://dev.twitter.com/docs)
- [Vimeo API](http://developer.vimeo.com/apis/simple)
- [Youtube Iframe API](https://developers.google.com/youtube/iframe_api_reference)
- [Youtube Data API](https://developers.google.com/youtube/v3/)

##Documentation

Documentation is available at [http://gearside.com/nebula](http://gearside.com/nebula)