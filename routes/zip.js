var express = require("express");
var router = express.Router();
const request = require("request");

router.get("/", async (req, res) => {
  //   let zipcode = req.query["zipcode"];
  //   console.log(zipcode);
  request(
    "https://zipcloud.ibsnet.co.jp/api/search?zipcode=4610001", //+ zipcode,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.json(data);
      }
    }
  );
});

module.exports = router;
