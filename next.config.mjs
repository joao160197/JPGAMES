const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sujeitoprogramador.com",
      }
    ]
  }
};

export default nextConfig;
