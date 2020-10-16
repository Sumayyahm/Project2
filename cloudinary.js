var cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.clName,
    api_key: process.env.clKey,
    api_secret: process.env.clSecret
});
