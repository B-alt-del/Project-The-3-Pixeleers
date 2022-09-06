const { Schema, model, SchemaTypes } = require('mongoose');

const pxlSchema = new Schema({
    name:{
        type: String,},
    width: { type: Number},//, min: 2, max: 40 },
    height: { type: Number},//, min: 2, max: 40 },
    // date_created: Date.now(),
    // user: String,
    colorArr: {
        type: String,
        required: true
    }
  });

  const PXL = model('Pxl', pxlSchema);

  module.exports = PXL;