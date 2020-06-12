module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name ? name : "Static Web Apps";

  context.res = {
    body: { name: responseMessage },
  };
};
