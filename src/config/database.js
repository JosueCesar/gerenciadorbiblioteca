module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'biblioteca',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}