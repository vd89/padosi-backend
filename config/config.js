const config = {
 env: process.env.NODE_ENV || 'development',
 port: process.env.PORT || 8282,
 jwtSecret: process.env.JWT_SECRET || '',
 mongoUri: process.env.MONGO_URI || ''
};

export default config;
