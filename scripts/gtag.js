function emit_page_view(page_name) {
    gtag('event', 'select_content', {
        'app_name': 'testAnalytics',
        'screen_name': page_name
    });
}