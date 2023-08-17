import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class videos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_video: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    main_casting: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ranking: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    multimedia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'multimedias',
        key: 'id_multimedia'
      }
    },
    tipo_archivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_archivo',
        key: 'id_tipo_archivo'
      }
    }
  }, {
    sequelize,
    tableName: 'videos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "videos_pkey",
        unique: true,
        fields: [
          { name: "id_video" },
        ]
      },
    ]
  });
  }
}
