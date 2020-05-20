const { getOptions } =require('loader-utils');
const validateOptions =require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  }
}

module.exports=function(source) {
  const options = getOptions(this);

  validateOptions(schema, options, 'replace name');
  const result = source.replace('[name]',options.name);
  this.callback(null, result)

};