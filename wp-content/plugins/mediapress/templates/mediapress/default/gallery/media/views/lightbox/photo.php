<?php if ( mpp_link_lightbox_media_to_permalink() ): ?>
    <a href="<?php mpp_media_permalink(); ?>" title="<?php echo esc_attr( mpp_get_media_title() ); ?>" class="mpp-lightbox-single-photo">

    <img src="<?php mpp_media_src( mpp_get_selected_lightbox_media_size() ); ?>"
         alt="<?php echo esc_attr( mpp_get_media_title() ); ?>" />
    </a>
<?php else:?>
    <img src="<?php mpp_media_src( mpp_get_selected_lightbox_media_size() ); ?>" alt="<?php echo esc_attr( mpp_get_media_title() ); ?>" />
<?php endif;?>
