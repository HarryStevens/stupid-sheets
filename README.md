# stupid-sheets
A stupid simple Google Sheets reader. [![Build Status](https://travis-ci.org/HarryStevens/stupid-sheets.svg?branch=master)](https://travis-ci.org/HarryStevens/stupid-sheets)

## Installation
```bash
npm i stupid-sheets -S
```

## Usage
stupid-sheets loads a published Google Sheet's data as JSON in Node.js.

```js
const googleSheetsId = "1PP72fxscsKti-QYHjllLN2FSie12eollE1QMh1a47Rg";
require("stupid-sheets")(googleSheetsId, json => {
  console.log(json);
});
```