import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class creators extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_creator: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'creators',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "creators_pkey",
        unique: true,
        fields: [
          { name: "id_creator" },
        ]
      },
    ]
  });
  }
}
