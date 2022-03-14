// domain/.netlify/1-hello/

const items = [{name: 'susan'}, {name: 'petr'}]
exports.handler = async (event, context, options) => {

  return {
    statusCode: 200,
    //body: JSON.stringify(items),
    body: JSON.stringify(items),
    //body: items,
  }

}