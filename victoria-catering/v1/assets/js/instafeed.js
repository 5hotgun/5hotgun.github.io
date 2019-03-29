$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        // userId: '9134311101', // espfox.new
        userId: '9185910050', // victoriacatering
        clientId: '2be14afcf9154b78b793f1196f043588', // victoriacatering client id
        limit: 9,
        resolution: 'standard_resolution',
        // accessToken: '9134311101.1677ed0.9635943ef2ed498ea775853311c4efc3', // Токен espfox.new
        // accessToken: '10598775142.1677ed0.74bd8ca789f54397b32b145a88a4b60c', // Токен Victroia catering
        accessToken: '9185910050.2be14af.4b708df09609452b8bcb83d2e88dd7ca', // new catering token
        sortBy: 'most-recent',
        template: '<div class="insta-image"> <div class="insta-overlay"> <a href="{{link}}" target="_blank" class="insta-link"></a> <div class="insta-counts"> <div class="insta-count"><img src="assets/img/icons/like.svg" alt="Likes"><span>{{likes}}</span></div><div class="insta-count"><img src="assets/img/icons/comment.svg" alt="Comments"><span>{{comments}}</span></div></div></div><img src="{{image}}" alt="Instagram Photo"> </div>'
    });
    userFeed.run();
});

//  https://api.instagram.com/oauth/authorize/?client_id=2be14afcf9154b78b793f1196f043588&redirect_uri=http://victoriacatering.ru/&scope=public_content&response_type=token
