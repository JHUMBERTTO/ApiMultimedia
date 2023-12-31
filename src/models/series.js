import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class series extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_serie: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noepisodes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seasons: {
      type: DataTypes.INTEGER,
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
    tableName: 'series',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "series_pkey",
        unique: true,
        fields: [
          { name: "id_serie" },
        ]
      },
    ]
  });
  }
}
