$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '9134311101',
        limit: 9,
        resolution: 'standard_resolution',
        accessToken: '9134311101.1677ed0.9635943ef2ed498ea775853311c4efc3',
        sortBy: 'most-recent',
        template: '<div class="insta-image"> <div class="insta-overlay"> <a href="{{link}}" target="_blank" class="insta-link"></a> <div class="insta-counts"> <div class="insta-count"><img src="assets/img/icons/like.svg" alt="Likes"><span>{{likes}}</span></div><div class="insta-count"><img src="assets/img/icons/comment.svg" alt="Comments"><span>{{comments}}</span></div></div></div><img src="{{image}}" alt="Instagram Photo"> </div>'
    });
    userFeed.run();
});
