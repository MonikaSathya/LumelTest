let inputData = {
    "dimensions": [{
      "id": "dimension_re",
      "values": ["East", "East", "West", "SouthWest", "South","NorthEast"]
    }, {
      "id": "dimension_cnt",
      "values": ["London", "Italy", "Germany", "US", "Russia","India"]
    },{
      "id": "measure_sales",
      "values": [100, 156, 432, 462, 25,100]
    }, {
      "id": "measure_qty",
      "values": [85, 34, 153, 434, 52, 43]
    }, {
      "id": "measure_profit",
      "values": [123, 45, 421, 465, 451, 56]
    }],
    "metadata": [ {
      "id": "measure_sales",
      "label": "Sales",
      "type":"number"
    }, {
      "id": "measure_qty",
      "label": "Quantity",
       "type":"number"
    }, {
      "id": "measure_profit",
      "label": "Profit",
       "type":"number"
    },{
      "id": "dimension_re",
      "label": "Region",
      "type":"string"
    }, {
      "id": "dimension_cnt",
      "label": "County",
      "type":"string"
    }]
};


const dimensions = inputData.dimensions;
const metadata = inputData.metadata;

dimensions.forEach(function(dim){
    metadata.forEach(function(meta){
        if(meta.id === dim.id ){
        dim.label = meta.label;
        }
    })
})
const result = [];
const valueLength = dimensions[0].values.length;
for (let j = 0; j < valueLength; j++) {
    const data = {};
    dimensions.forEach(function(dim, i){
      data[dim.label] = dim.values[j];
    })
   result.push(data);
}
console.log(result);
    