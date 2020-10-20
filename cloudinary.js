var cloudinary = require("cloudinary-core");
var cl = new cloudinary.Cloudinary({cloud_name: "esthete", secure: true});

cloudinary.config({
    cloud_name: process.env.clName,
    api_key: process.env.clKey,
    api_secret: process.env.clSecret
});
