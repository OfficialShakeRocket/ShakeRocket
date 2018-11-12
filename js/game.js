window.onload = function() {
    FBInstant.initializeAsync().then(function() {
        var ui_list = ['fuelBar'];
        var preloaded_ui = {};
        for (var i = 0; i < ui_list.length; i++) {
            var img = new Image();
            img.src = './assets/ui/' + ui_list[i] + '.png';
            preloaded_ui[ui_list[i]] = img;
            FBInstant.setLoadingProgress(Math.ceil(i / ui_list.length)*100);
        }
        FBInstant.startGameAsync().then(function() {
            const r = new Renderer();
            r.clear();
            r.image(preloaded_ui['fuelBar'], 100, 100, 100, 100);
        });
    });
}

//http-server --ssl -c-1 -p 8080 -a 127.0.0.1