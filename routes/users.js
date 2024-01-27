const express = require("express");
const router = express.Router();
const baseURL = process.env.baseUrl;
const axios = require("axios");
const axiosInstance = axios.create({
  baseURL: baseURL,
  header: { "Access-Control-Allow_Origin": "*" },
});

router.get("/", async (req, res) => {
  const result = await axiosInstance.get("/unicorns");
  console.log("Re", result.data);
  res.send(result.data);
  // const result = "";
  // fetch(endpoint + "/unicorns")
  //   .then((response) => {
  //     return response.json();
  //   })
  // .catch((e) => console.log("error", e));
  // res.send(result);
  //console.log(result);
  //res.render("index", { name: "Best Result" });
});

router.post("/", async (req, res) => {
  if (req.body.name) {
    req.body.id = Math.floor(Math.random() * 10000);
    const result = await axiosInstance.post("/unicorns", req.body);
    res.send(result.data);
  } else res.send("Not Data for post");
});

router.get("/new", (req, res) => {
  if (req.query.name) {
    res.send(`Your name is ${req.query.name}`);
  } else res.send("New User Page");
});

router
  .route("/:id")
  .get(async (req, res) => {
    const userId = req.params.id;
    const result = await axiosInstance.get("/unicorns" + "/" + userId);
    res.send(result.data);
  })
  .put(async (req, res) => {
    const userId = req.params.id;
    if (req.body) {
      const result = await axiosInstance.put(
        "/unicorns" + "/" + userId,
        req.body
      );
      console.log("Proposeed data", result.data);
      res.send(result.data);
    } else res.send("No Data For Update");
  })
  .delete(async (req, res) => {
    const userId = req.params.id;
    //65b3d32a658e2403e8762bb3
    const result = await axiosInstance.delete("/unicorns" + "/" + userId);
    res.sendStatus(result.status);
  });

module.exports = router;
