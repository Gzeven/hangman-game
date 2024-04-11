// /** @type {import('next').NextConfig} */
// const nextConfig = {};


// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
