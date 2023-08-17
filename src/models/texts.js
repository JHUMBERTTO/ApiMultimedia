import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class texts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_text: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sheets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iscolor: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'texts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "texts_pkey",
        unique: true,
        fields: [
          { name: "id_text" },
        ]
      },
    ]
  });
  }
}
