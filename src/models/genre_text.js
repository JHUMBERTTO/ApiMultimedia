import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class genre_text extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_genre_text: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'genre',
        key: 'id_genre'
      }
    },
    text_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'videos',
        key: 'id_video'
      }
    }
  }, {
    sequelize,
    tableName: 'genre_text',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genre_text_pkey",
        unique: true,
        fields: [
          { name: "id_genre_text" },
        ]
      },
    ]
  });
  }
}
