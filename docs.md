<!-- date - 13 dep -->
<!-- date - 14 dec (3-4 hours) -->

- images in public folder, accessed using /
- we need to add iamges domain in next config , as given below:
  const nextConfig = {
  images: {
  remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  }
