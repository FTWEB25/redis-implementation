const redis = require("../config/redis");
const { validateToken } = require("../config/token");
const UserModel = require("../models/user.model");

const auth = async (req, res, next) => {
  try {
    redis.get("token", async (err, token) => {
      if (err) {
        console.error("Error getting token from Redis:", err);
        return res.status(500).json({ msg: "Internal server error" });
      }

      if (token) {
        try {
          const decoded = validateToken(token);
          if (decoded) {
            const user = await UserModel.findOne({
              _id: decoded.userId,
            }).select("-password");
            if (user) {
              req.user = user;
              return next();
            } else {
              return res.status(404).json({ msg: "User not found" });
            }
          } else {
            return res.status(401).json({ msg: "Invalid token" });
          }
        } catch (error) {
          console.error("Error querying database:", error);
          return res.status(500).json({ msg: "Internal server error" });
        }
      } else {
        return res.status(200).json({ msg: "Please login first" });
      }
    });
  } catch (error) {
    console.error("Error in auth middleware:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = auth;
