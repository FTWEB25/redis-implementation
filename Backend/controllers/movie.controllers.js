const redis = require("../config/redis");

const getMovies = async (req, res) => {
  try {
    const token = await redis.get("token", (err, value) => {
      if (err) {
        console.error("Error getting value for key:", err);
        return;
      }
      console.log("Got value:", value);
    });
    if (token) {
        const ttl = await client.ttl("token"); 
        console.log("Token value:", token);
        console.log("Token expiration time:", ttl, "seconds");
        res.status(200).json({ msg: " authorized" });
    } else {
      res.status(200).json({ msg: "Not authorized" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports={getMovies}