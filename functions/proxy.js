// Netlify Function format
exports.handler = async function(event, context) {
    const targetUrl = "https://outdoorfashion.rf.gd/api/order/create.php";
  
    // CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };
  
    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 200, headers, body: "" };
    }
  
    try {
      if (event.httpMethod === "POST") {
        const response = await fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: event.body
        });
        const data = await response.text();
        return { statusCode: 200, headers, body: data };
      } else {
        const response = await fetch(targetUrl);
        const data = await response.text();
        return { statusCode: 200, headers, body: data };
      }
    } catch (err) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
    }
  };
  