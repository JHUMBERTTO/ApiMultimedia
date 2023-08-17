import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class genre extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_genre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'genre',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genre_pkey",
        unique: true,
        fields: [
          { name: "id_genre" },
        ]
      },
    ]
  });
  }
}
