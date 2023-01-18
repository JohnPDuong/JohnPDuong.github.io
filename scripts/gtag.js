function emit_page_view(page_name) {
    gtag('event', 'select_content', {
        'screen_name': page_name
    });
}