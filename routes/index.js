const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello");
});

// router.get("/", (req, res) => {
//   res.send("User Page");
// });

// router.get("/new", (req, res) => {
//   if (req.query.name) {
//     res.send(`Your name is ${req.query.name}`);
//   } else res.send("New User Page");
// });

// router
//   .route("/:id")
//   .get((req, res) => {
//     const userId = req.params.id;
//     console.log("This is user", userId);
//   })
//   .put((req, res) => {
//     const userId = req.params.id;
//     console.log("This is for update user id", userId);
//   })
//   .delete((req, res) => {
//     const userId = req.params.id;
//     console.log("This is for delete user id", userId);
//   });

module.exports = router;
