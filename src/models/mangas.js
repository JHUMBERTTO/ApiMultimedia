import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class mangas extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_manga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    volumes: {
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
    tableName: 'mangas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mangas_pkey",
        unique: true,
        fields: [
          { name: "id_manga" },
        ]
      },
    ]
  });
  }
}
