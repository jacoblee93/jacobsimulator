const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (password = null, context) => {
  
  if (context.http.headers['referer'] !== 'https://jacobsimulator.com/') {
    return 'Unauthorized. Please visit https://jacobsimulator.com/access/ to get your access token.';
  }
  
  let countResponse = await lib.airtable.query['@0.5.3'].select({
    baseId: `app5rElcdr2nLk7li`,
    table: `Visitor Count`,
    where: [
      {
        'Name__is': `Count`
      }
    ]
  });
  
  let newCount = ++countResponse.rows[0].fields.Value ;
  
  await lib.airtable.query['@0.5.3'].update({
    baseId: `app5rElcdr2nLk7li`,
    table: `Visitor Count`,
    where: [
      {
        'Name__is': `Count`
      }
    ],
    fields: {
      Value: newCount
    }
  });

  return newCount;
  
};