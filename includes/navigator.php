<?php

	$requested_page = $_POST['data'];
	$resultCounter = 0;


	//Check Page Titles
	query_posts( array('post_type' => 'page', 'pagename' => $requested_page) );
	if ( have_posts() ) while ( have_posts() ) : the_post();
		$resultCounter++;
		echo get_permalink();
		exit();
	endwhile;
	wp_reset_query();


	//Check Post Titles
	if ( $resultCounter == 0 ) :
		query_posts( array('name' => $requested_page) );
		if ( have_posts() ) while ( have_posts() ) : the_post();
			$resultCounter++;
			echo get_permalink();
			exit();
		endwhile;
		wp_reset_query();
	endif;


	$requested_slug = str_replace(' ', '-', $requested_page);


	//Check Menu Items
	if ( $resultCounter == 0 ) :
		$menus = get_terms('nav_menu');
		foreach($menus as $menu){
			$menu_items = wp_get_nav_menu_items($menu->term_id);
			foreach ( (array) $menu_items as $key => $menu_item ) {
			    if ( strtolower($menu_item->title) == $requested_page ) {
					echo $menu_item->url;
					exit();
			    }
			}
		}
	endif;


	//Check category names
	if ( $resultCounter == 0 ) :
		$requestedCategory = get_category_by_slug($requested_slug);
		if ( $requestedCategory ) {
			$resultCounter++;
			$categoryID = $requestedCategory->term_id;
			echo get_category_link($categoryID);
		}
	endif;


	//Check tags (this returns posts within a tag)
	if ( $resultCounter == 0 ) :
		$requestedTag = get_term_by('slug', $requested_slug, 'post_tag');
		if ( $requestedTag ) {
			$resultCounter++;
			$tagID = $requestedTag->term_id;
			echo get_tag_link($tagID);
		}
	endif;


	//Return search results
	if ( $resultCounter == 0 ) :
		$requested_page = str_replace(' ', '+', $requested_page);
		echo home_url() . '/?s=' . $requested_page;
	endif;

?>