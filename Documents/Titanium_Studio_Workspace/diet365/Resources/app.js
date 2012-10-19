var win, tab, tg;
// タイトルを
win = Ti.UI.createWindow({url: "title.js"});
win.hideTabBar();

tab = Ti.UI.createTab({window: win});

// タブグループ
tg = Ti.UI.createTabGroup();
tg.addTab(tab);
tg.open();