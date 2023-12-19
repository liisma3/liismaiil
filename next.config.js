/** @type {import('next').NextConfig} */

const nextConfig = {
  
  reactStrictMode: true,
  env: {
    LOCAL_URL: "http://localhost:3003/",
    DEV_PORT: "3003",
    LOCAL_API_URL: "http://localhost:3003/api",
    HTTPS_API_URL: "https://liismaiil.org/api",
    HTTPS_URL: "https://liismaiil.org/",
  },
  distDir: "bundle",
  images: {
    domains: [
      "image.tmdb.org",
      "s.gravatar.com",
      "www.jennexplores.com",
      "upload.wikimedia.org",
      "via.placeholder.com",
      "res.cloudinary.com",
      "imageflag.s3.eu-west-1.amazonaws.com",
      "profile-back.s3.eu-central-1.amazonaws.com",
    ],
  }
  
};

module.exports = nextConfig;
