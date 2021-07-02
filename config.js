const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'solutex.cloudaccess.host',
    user: env.DB_USER || 'wnuqdyrb',
    password: env.DB_PASSWORD || '160577',
    database: env.DB_NAME || 'wnuqdyrb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;
