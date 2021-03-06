module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        // client: 'sqlite',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),// strapi部署的服务器与MySQL所在的服务器是同一个服务器，主机就直接写localhost
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', 'blog'), // 新建用户叫 blog
        password: env('DATABASE_PASSWORD', 'dclwoaitkw'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
