import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class social_videos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_social: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scial_media: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    tableName: 'social_videos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "social_videos_pkey",
        unique: true,
        fields: [
          { name: "id_social" },
        ]
      },
    ]
  });
  }
}
