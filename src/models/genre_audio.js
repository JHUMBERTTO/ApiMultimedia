import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class genre_audio extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_genre_audio: {
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
    audio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'audios',
        key: 'id_audio'
      }
    }
  }, {
    sequelize,
    tableName: 'genre_audio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genre_audio_pkey",
        unique: true,
        fields: [
          { name: "id_genre_audio" },
        ]
      },
    ]
  });
  }
}
