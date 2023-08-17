import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tipo_archivo extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tipo_archivo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    extension: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_archivo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tipo_archivo_pkey",
        unique: true,
        fields: [
          { name: "id_tipo_archivo" },
        ]
      },
    ]
  });
  }
}
