document.addEventListener('DOMContentLoaded', function() {
    const newsTicker = document.querySelector('.news');
    const newsItems = Array.from(newsTicker.querySelectorAll('span'));

    function shuffleNews() {
        for (let i = newsItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newsItems[i], newsItems[j]] = [newsItems[j], newsItems[i]];
        }
        newsItems.forEach(item => newsTicker.appendChild(item));
    }

    shuffleNews();
    setInterval(shuffleNews, 10000); 
});
