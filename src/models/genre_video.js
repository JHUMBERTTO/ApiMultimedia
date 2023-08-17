import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class genre_video extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_genre_video: {
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
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'videos',
        key: 'id_video'
      }
    }
  }, {
    sequelize,
    tableName: 'genre_video',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genre_video_pkey",
        unique: true,
        fields: [
          { name: "id_genre_video" },
        ]
      },
    ]
  });
  }
}
