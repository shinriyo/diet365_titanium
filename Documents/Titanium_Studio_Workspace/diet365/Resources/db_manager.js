
// db
var db = Ti.Database.open('mydb.sqlite');

var deleteTable = function(table_name) {
     var query_str = 'delete from ' + table_name;
     db.execute(query_str);
};

var insertTable = function(table_name, param_ary) {
    var query_str = 'insert into ' + table_name + ' (my_date, title2, describe) values (\''
        + param_ary[0] + '\', \'' + param_ary[1] + '\', \'' + param_ary[2] + '\')';
    db.execute('begin transaction');
    db.execute(query_str);
    db.execute('commit');
};

//db.execute('drop table users');
db.execute('create table if not exists recipes (my_date text, title2 text, describe text)');
//deleteTable('recipes');
db.execute('begin transaction');
db.execute('commit');

// DBの結果用
var rows;
// 初期化はあとで
var recipes_array;

// 更新
var updateTable = function() {
    rows = db.execute('select rowid, * from recipes');
    Ti.API.info('row count = ' + rows.getRowCount());
    recipes_array = [];
    
    while (rows.isValidRow()) {
        Ti.API.info('id:' + rows.fieldByName('rowid') + ' my_date:' + rows.field(1) + 'title2:' + rows.fieldByName('describe'));
        // テーブル用に
        recipes_array.push({title:rows.field(1), hasChild:true, title2:rows.field(2), describe:rows.field(3), dest:'daily_diet.js'});
        rows.next();
    }
    
    recipes_array = recipes_array.reverse();
};
updateTable();

rows.close();
