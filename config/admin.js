module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '78cc8996f6a48aed8c64cbae8ff559e4'),
  },
});
