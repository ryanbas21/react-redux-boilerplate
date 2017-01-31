const Sequelize = require('sequelize')
const User = {
  file: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blog_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  updatedAt: 'last_update',
  createdAt: 'date_of_creation'
};
