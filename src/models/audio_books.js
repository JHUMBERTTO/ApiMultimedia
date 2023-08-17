import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class audio_books extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_audio_book: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'audio_books',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "audio_books_pkey",
        unique: true,
        fields: [
          { name: "id_audio_book" },
        ]
      },
    ]
  });
  }
}
