var album_view = Ti.UI.createView();

// ヘッダー
var title2_label = Ti.UI.createLabel({
    color: '#000',
    font: { fontSize: 24 },
    textAlign: 'center',
    height: 32,
    width: 350,
    top: 10
});

// 説明
var describe_label = Ti.UI.createLabel({
    color: '#000',
    suppressReturn: false, // 改行できる
    height: 32,
    width: 300,
    left: 10,
    top: 50
});

title2_label.text = Ti.UI.currentWindow.extern.title2;
describe_label.text = Ti.UI.currentWindow.extern.describe;

album_view.add(title2_label);
album_view.add(describe_label);

// ビューをWindowsへ
Ti.UI.currentWindow.add(album_view);