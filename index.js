module.exports = function(id, cb){
  require("request")(makeUrl(id), (err, res, body) => {
    if (err) {
      console.log(`Error requesting ${id}:`, err);
      return;
    }
    if (res.statusCode !== 200){
      console.log(`Bad status requesting ${id}:`, res.statusCode);
      return;
    }

    const rows = JSON.parse(body.replace("gdata.io.handleScriptLoaded(", "").replace(");", "")).feed.entry,
          cols = Object.keys(rows[0]).filter(f => f.includes("gsx$")),
          rn = rows.length,
          cn = cols.length,
          data = [];

    for (let ri = 0; ri < rn; ri++){
      const obj = {};
      for (let ci = 0; ci < cn; ci++){
        const col = cols[ci];
        obj[col.replace("gsx$", "")] = rows[ri][col].$t;
      }
      data[ri] = obj;
    }

    cb(data);
  });

  function makeUrl(id){
    return `https://spreadsheets.google.com/feeds/list/${id}/default/public/values?alt=json-in-script`;
  }  
}