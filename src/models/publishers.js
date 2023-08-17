import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class publishers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_publishers: {
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
    tableName: 'publishers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "publishers_pkey",
        unique: true,
        fields: [
          { name: "id_publishers" },
        ]
      },
    ]
  });
  }
}
