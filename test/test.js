const tape = require("tape"),
      sheets = require("../"),
      id = "1PP72fxscsKti-QYHjllLN2FSie12eollE1QMh1a47Rg";

tape("Get a sample sheet", function(test){
  sheets(id, data => {
    test.equal(data.length, 5);
    test.deepEqual(Object.keys(data[0]), ["name", "age", "country"]),
    test.deepEqual(data[data.length - 1], { name: 'Franz Joseph I', age: '73', country: 'Austria-Hungary' });
    test.end();
  });
});

