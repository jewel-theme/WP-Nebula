jQuery.noConflict();

jQuery(window).on('load', function() {

	iframe = document.getElementById("content_ifr");
	if ( typeof iframe !== 'undefined' ) {
		win = iframe.contentWindow;
		doc = win.document;
	}

}); //End Window Load


/*==========================
 Nebula TinyMCE Toolbar
 ===========================*/
(function() {
	tinymce.create('tinymce.plugins.nebulatoolbar', {
		init : function(ed, url) {
			ed.addButton('nebulaaccordion', {
				title: 'Insert Accordion',
				image: bloginfo['template_directory'] + '/images/admin/nebulaaccordion.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[accordion]CONTENT_HERE[/accordion]');
				}
			}),
			ed.addButton('nebulabio', {
				title: 'Insert Bio',
				image: bloginfo['template_directory'] + '/images/admin/nebulabio.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[bio]');
				}
			}),
			ed.addButton('nebulabutton', {
				title: 'Insert Button',
				image: bloginfo['template_directory'] + '/images/admin/nebulabutton.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[button size=medium type=primary pretty icon=icon-mail href=http://pinckneyhugo.com/ target=_blank]Click Here[/button]');
				}
			}),
			ed.addButton('nebulaclear', {
				title : 'Insert Clear',
				image : bloginfo['template_directory'] + '/images/admin/nebulaclear.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[clear]');
				}
			}),
			ed.addButton('nebulacode', {
				title : 'Insert Code',
				type: 'menubutton',
				icon: 'nebulacode',
				classes : 'widget btn nebula-icon',
				menu: [{
					text: 'Tag',
					onclick : function() {
						if (win.getSelection) {
							var selectedText = win.getSelection().toString();
						} else if (doc.selection && doc.selection.createRange) {
							var selectedText = doc.selection.createRange().text;
						}
						ed.focus();
						if ( typeof selectedText != undefined && selectedText != '' ) {
							ed.selection.setContent('[code]' + selectedText + '[/code]');
						} else {
							ed.selection.setContent('[code]CONTENT_HERE[/code]');
						}
					}
				}, {
					text: 'Pre',
					onclick : function() {
						if (win.getSelection) {
							var selectedText = win.getSelection().toString();
						} else if (doc.selection && doc.selection.createRange) {
							var selectedText = doc.selection.createRange().text;
						}
						ed.focus();
						if ( typeof selectedText != undefined && selectedText != '' ) {
							ed.selection.setContent('[pre lang=LANGUAGE]' + selectedText + '[/pre]');
						} else {
							ed.selection.setContent('[pre lang=LANGUAGE]CONTENT_HERE[/pre]');
						}
					}
				}, {
					text: 'Gist',
					onclick : function() {
						ed.focus();
						ed.selection.setContent('[gist file=FILENAME lang=LANGUAGE]URL[/gist]');
					}
				}]
			}),
			ed.addButton('nebuladiv', {
				title : 'Insert Div',
				image : bloginfo['template_directory'] + '/images/admin/nebuladiv.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					if (win.getSelection) {
						var selectedText = win.getSelection().toString();
					} else if (doc.selection && doc.selection.createRange) {
						var selectedText = doc.selection.createRange().text;
					}
					ed.focus();
					if ( typeof selectedText != undefined && selectedText != '' ) {
						ed.selection.setContent('[div class="CLASSES" style=STYLES]' + selectedText + '[/div]');
					} else {
						ed.selection.setContent('[div class="CLASSES" style="STYLES"]CONTENT_HERE[/div]');
					}
				}
			}),
			ed.addButton('nebulacolgrid', {
				title : 'Insert Grid',
				type: 'menubutton',
				icon: 'nebulacolgrid',
				classes : 'widget btn nebula-icon',
				menu: [{
					text: 'Colgrid',
					onclick : function() {
						if (win.getSelection) {
							var selectedText = win.getSelection().toString();
						} else if (doc.selection && doc.selection.createRange) {
							var selectedText = doc.selection.createRange().text;
						}
						ed.focus();
						if ( typeof selectedText != undefined && selectedText != '' ) {
							ed.selection.setContent('[colspan sixteen class="CLASSES" style="STYLES"]' + selectedText + '[/colspan]');
						} else {
							ed.selection.setContent('[colspan sixteen class="CLASSES" style="STYLES"]CONTENT_HERE[/colspan]');
						}
					}
				}, {
					text: 'Container',
					onclick : function() {
						if (win.getSelection) {
							var selectedText = win.getSelection().toString();
						} else if (doc.selection && doc.selection.createRange) {
							var selectedText = doc.selection.createRange().text;
						}
						ed.focus();
						if ( typeof selectedText != undefined && selectedText != '' ) {
							ed.selection.setContent('[container class="CLASSES" style="STYLES"]' + selectedText + '[/container]');
						} else {
							ed.selection.setContent('[container class="CLASSES" style="STYLES"]CONTENT_HERE[/container]');
						}
					}
				}, {
					text: 'Row',
					onclick : function() {
						if (win.getSelection) {
							var selectedText = win.getSelection().toString();
						} else if (doc.selection && doc.selection.createRange) {
							var selectedText = doc.selection.createRange().text;
						}
						ed.focus();
						if ( typeof selectedText != undefined && selectedText != '' ) {
							ed.selection.setContent('[row class="CLASSES" style="STYLES"]' + selectedText + '[/row]');
						} else {
							ed.selection.setContent('[row class="CLASSES" style="STYLES"]CONTENT_HERE[/row]');
						}
					}
				}, {
					text: 'Column',
					onclick : function() {
						if (win.getSelection) {
							var selectedText = win.getSelection().toString();
						} else if (doc.selection && doc.selection.createRange) {
							var selectedText = doc.selection.createRange().text;
						}
						ed.focus();
						if ( typeof selectedText != undefined && selectedText != '' ) {
							ed.selection.setContent('[columns four push=one class="CLASSES" style="STYLES"]' + selectedText + '[/columns]');
						} else {
							ed.selection.setContent('[columns four push=one class="CLASSES" style="STYLES"]CONTENT_HERE[/columns]');
						}
					}
				}]
			}),
			ed.addButton('nebulaicon', {
				title : 'Insert Icon',
				type: 'splitbutton',
				icon: 'nebulaicon',
				classes : 'widget btn colorbutton nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[icon type=icon-home color=COLOR size=SIZE class="CLASSES"]');
				},
				menu: [{
					text: 'View all Entypo icons »',
					onclick: function(){
						window.open('http://gumbyframework.com/docs/ui-kit/#!/icons','_blank');
					}
				}, {
					text: 'View all Font Awesome icons »',
					onclick: function(){
						window.open('http://fortawesome.github.io/Font-Awesome/icons/','_blank');
					}
				}]
			}),
			ed.addButton('nebulaline', {
				title : 'Insert Line',
				image : bloginfo['template_directory'] + '/images/admin/nebulaline.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[line space=5]');
				}
			}),
			ed.addButton('nebulamap', {
				title : 'Insert Google Map',
				type: 'splitbutton',
				icon : 'nebulamap',
				classes : 'widget btn colorbutton nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[map q="Pinckney Hugo Group"]');
				},
				menu: [{
					text: 'Place',
					onclick : function() {
						ed.focus();
						ed.selection.setContent('[map q="Pinckney Hugo Group"]');
					}
				}, {
					text: 'Directions',
					onclick : function() {
						ed.focus();
						ed.selection.setContent('[map mode=directions origin="Pinckney Hugo Group" destination="Destiny USA"]');
					}
				}, {
					text: 'Search',
					onclick : function() {
						ed.focus();
						ed.selection.setContent('[map mode=search q="Food in Syracuse, NY"]');
					}
				}, {
					text: 'View',
					onclick : function() {
						ed.focus();
						ed.selection.setContent('[map mode=view center="43.0536364,-76.1657063" zoom=19 maptype=satellite]');
					}
				}]
			}),
			ed.addButton('nebulaslider', {
				title : 'Insert Slider',
				image : bloginfo['template_directory'] + '/images/admin/nebulaslider.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[slider frame status]<br/>[slide title="TITLE_HERE" link=http://www.pinckneyhugo.com target=_blank]IMAGE_URL_HERE[/slide]<br/>[/slider]');
				}
			}),
			ed.addButton('nebulaspace', {
				title : 'Insert Vertical Space',
				image : bloginfo['template_directory'] + '/images/admin/nebulaspace.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					ed.focus();
					ed.selection.setContent('[space height=25]');
				}
			}),
			ed.addButton('nebulatooltip', {
				title: 'Insert Tooltip',
				image: bloginfo['template_directory'] + '/images/admin/nebulatooltip.png',
				classes : 'widget btn nebula-icon',
				onclick : function() {
					if (win.getSelection) {
						var selectedText = win.getSelection().toString();
					} else if (doc.selection && doc.selection.createRange) {
						var selectedText = doc.selection.createRange().text;
					}
					ed.focus();
					if ( typeof selectedText != undefined && selectedText != '' ) {
						ed.selection.setContent('[tooltip tip="BUBBLE_TEXT_HERE"]' + selectedText + '[/tooltip]');
					} else {
						ed.selection.setContent('[tooltip tip="BUBBLE_TEXT_HERE"]CONTENT[/tooltip]');
					}
				}
			}),
			ed.addButton('nebulavideo', {
				title : 'Insert Video',
				type: 'splitbutton',
				icon: 'nebulavideo',
				classes : 'widget btn colorbutton nebula-icon',
				onclick: function(){
					ed.focus();
					ed.selection.setContent('[youtube id=YOUTUBE_VIDEO_ID]');
				},
				menu: [{
					text: 'Youtube',
					onclick: function(){
						ed.focus();
						ed.selection.setContent('[youtube id=YOUTUBE_VIDEO_ID]');
					}
				}, {
					text: 'Vimeo',
					onclick: function(){
						ed.focus();
						ed.selection.setContent('[vimeo id=VIMEO_VIDEO_ID]');
					}
				}]
			});
		},
		createControl : function(n, cm) {
			return null;
		}
	});
	tinymce.PluginManager.add('nebulatoolbar', tinymce.plugins.nebulatoolbar);
})();