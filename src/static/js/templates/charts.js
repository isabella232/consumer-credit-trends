"use strict";

var charts = [{
  "title": "Number of loans originated",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_AUT.csv",
  "elementID": "figure-1a__number"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_AUT.csv",
  "elementID": "figure-1a__volume"
},
{
  "title": "Map",
  "chartType": "map",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_AUT.csv",
  "elementID": "auto-loan_geo-changes"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "auto-loan_yoy-number"
},
{
  "title": "Volume of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "auto-loan_yoy-volume"
}]

module.exports = charts;