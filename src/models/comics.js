import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class comics extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_comic: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'texts',
        key: 'id_text'
      }
    }
  }, {
    sequelize,
    tableName: 'comics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "comics_pkey",
        unique: true,
        fields: [
          { name: "id_comic" },
        ]
      },
    ]
  });
  }
}
