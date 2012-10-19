// タイトル
Ti.UI.currentWindow.hideNavBar()
Ti.UI.currentWindow.backgroundColor = "#888";
 
// ボタン
var myButton = Ti.UI.createButton({
    title: 'START',
    align: 'center',
    top: 300,
    height: 50,
    width: 100,
});

// ラベル
// 結果ラベル
var myLabel = Ti.UI.createLabel({ 
    font: { fontSize: 100 },
    textAlign: 'center',
    text: 'Diet 365',
    width: 310,
    height: 'auto',
    top: 20,
    left: 10,
    color: '#000',
    shadowColor: '#fff',
    shadowOffset: { x:0, y:1 }
});

Ti.UI.currentWindow.add(myButton);
Ti.UI.currentWindow.add(myLabel);

myButton.addEventListener("click", function(){
    Ti.UI.currentTab.open(Ti.UI.createWindow({url: "table_view.js"}));
});
