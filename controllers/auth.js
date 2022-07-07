const identity = require("aspnetcore-identity-password-hasher");
const { AbpUser } = require("../models");
const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const user = await AbpUser.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      throw new ApiError("404", "NOT FOUND !!");
    }
    const isPasswordCorrect = await identity.verify(
      req.body.password,
      user.Password
    );

    if (!isPasswordCorrect) {
      throw new ApiError("400", "Wrong password or username");
    }

    const token = jwt.sign(
      { id: user.id, Name: user.Name },
      process.env.SECRET
    );

    const {
      Password,
      SecurityStamp,
      SignInToken,
      SignInTokenExpireTimeUtc,
      GoogleAuthenticatorKey,
      ConcurrencyStamp,
      ...otherDetails
    } = user.dataValues;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({ ...otherDetails });
  } catch (error) {
    throw new ApiError("400", error);
  }
};