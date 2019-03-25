$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '9134311101',
        limit: 9,
        resolution: 'standard_resolution',
        accessToken: '9134311101.1677ed0.9635943ef2ed498ea775853311c4efc3',
        sortBy: 'most-recent',
        template: '<div class="insta-image"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
    });
    userFeed.run();
});
