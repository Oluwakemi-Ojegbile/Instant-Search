new Vue({
    el: '#main-wrapper',
    data: {
        searchString: "",
        
        articles: [
            {
                "title": "Pauses For Lent: Who Do You Say I Am?",
                "url": "https://renovare.org/articles/pauses-for-lent-who-do-you-say-i-am",
                "image": "https://renovare.imgix.net/resources/Pauses-for-Lent.jpg?h=600"
            },
            {
                "title": "What to Pray When Pain Takes Your Words",
                "url": "https://renovare.org/articles/what-to-pray-when-pain-takes-your-words",
                "image": "https://renovare.imgix.net/articles/man-kneeling-praying-on-pew.jpg?w=900&q=85"
            },
            {
                "title": "The Blessedness of Possessing Nothing",
                "url": "https://renovare.org/articles/blessedness-possessing-nothing",
                "image": "https://renovare.imgix.net/articles/12.07-Tyranny-Things.jpg?w=900&q=85"
            },
            {
                "title": "The Secret of Guidance",
                "url": "https://renovare.org/articles/the-secret-of-guidance",
                "image": "https://renovare.imgix.net/articles/07.22-Fireflies-as-Lantern.jpg?w=900&q=85"
            },
            {
                "title": "An Habitual Sense of His Presence",
                "url": "https://renovare.org/articles/an-habitual-sense-of-gods-presence",
                "image": "https://renovare.imgix.net/articles/lightstock_147649_medium_user_1712940.jpg?w=900&q=85"
            },
            {
                "title": "Acquiring a Taste for God",
                "url": "https://renovare.org/articles/acquiring-a-taste-for-god",
                "image": "https://renovare.imgix.net/articles/Cup.jpeg?w=900&q=85"
            }
        ]
    },
    computed: {
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
           
            return articles_array;;
        }
    }
});