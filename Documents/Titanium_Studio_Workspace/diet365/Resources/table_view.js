Ti.include('DateFormatter.js');
Ti.include('db_manager.js');

// テーブルのウィンドウ
var table_window = Ti.UI.createWindow({
    title:'レシピ',
});

// from server
var xhr = Titanium.Network.createHTTPClient();
var myURL;
var URL = 'http://49.212.162.124:8080/recipes/get/';
var today = DateFormatter.format(new Date(), "Y-m-d")

myURL = URL + today + '.json'; 

// 第一引数はHTTP Method(GETかPOSTがほとんどだと思いますが)
// 第二引数はURIです。
xhr.open('GET', myURL);
Ti.API.info(myURL);
// レスポンスを受け取るイベント
xhr.onload = function() {
// そのままアラート 
    // JSONパース
    var json = JSON.parse(this.responseText);
    // 今日の日付のレシピがない
    Ti.API.info('json.my_date =>' + json.my_date);
    Ti.API.info("recipes_array.length:" + recipes_array.length);
    
    if (recipes_array.length > 0)
    {
        // titleはmy_date相当
        Ti.API.info('recipes_array[0].my_date =>' + recipes_array[0].title);
    } else {
        Ti.API.info('いまんとこ0件');
    }

    if (recipes_array.length < 1 || json.my_date != recipes_array[0].title)
    {
        var tmp_ary = [];
        tmp_ary.push(json.my_date); // 日付
        tmp_ary.push(json.title2); // タイトル
        tmp_ary.push(json.describe); // 内容
        insertTable('recipes', tmp_ary);
        alert("本日のダイエットレシピが追加されました。");
        // 表示の更新
        updateTable();
        // テーブルビューに反映
        table_view.setData(recipes_array);
    }

    /*
    // これと同義
    xhr.onreadystatechange = function(){
    if (this.readyState == xhr.DONE) {
        alert(this.responseText);
    }
    */
}
// エラー発生時のイベント
xhr.onerror = function(error) {
    // errorにはエラー事由の文字列オブジェクトが入ってくる。
};

// リクエスト送信します。(引数としてJSON値を入れるとパラメータ化される)
xhr.send();
/*
xhr.send({
    q : 'querystring',
    param_name : 'param_value'
});
*/
// テーブルビュー
//var table_view = Ti.UI.createTableView({
table_view = Ti.UI.createTableView({
    title: 'レシピ',
    // DBからビューへつっこむ
    data: recipes_array
});

// テーブル
table_view.addEventListener('click', function(e) {
    if (e.rowData.hasChild) {
        var w = Ti.UI.createWindow({
            url: e.rowData.dest,
            title: e.rowData.title,
            backgroundColor: 'white'
        });
        
        w.extern = {
            title2: e.rowData.title2,
            describe: e.rowData.describe,
        };

        close_button = Ti.UI.createButton({
            title: "閉じる",
            //systemButton:Titanium.UI.iPhone.SystemButton.DONE
        });
        w.leftNavButton = close_button;
        close_button.addEventListener('click', function(){w.close();});
        w.open({modal:true});
    }
});

// テーブル用ウィンドウを
table_window.add(table_view);


// ナビゲーショングループと、それを含むTopLevelのWindow
var root_window = Titanium.UI.createWindow();

// CLOSEボタン
var root_close_button = Ti.UI.createButton({
    title: "戻る",
    // systemButton:Titanium.UI.iPhone.SystemButton.DONE
});
table_window.leftNavButton = root_close_button;
root_close_button.addEventListener('click',
    function() {
        root_window.close();
        
        // タイトルに戻る
        var win, tab, tg;
        // タイトルを
        win = Ti.UI.createWindow({url: "title.js"});
        win.hideTabBar();

        tab = Ti.UI.createTab({window: win});

        // タブグループ
        tg = Ti.UI.createTabGroup();
        tg.addTab(tab);
        tg.open();
    }
);

var nav_grp  = Titanium.UI.iPhone.createNavigationGroup({
    // ナビゲーショングループの１枚目の画面を指定
    window: table_window
});
// ナビゲーショングループをTopLevelのWindowに追加し、開く
root_window.add(nav_grp);

root_window.open();
/*
root_window.open({
    // 左から回転アニメ
    //transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    // かみみたい
    transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
});
*/