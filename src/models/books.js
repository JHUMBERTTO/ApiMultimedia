import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class books extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_book: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sheets: {
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
    tableName: 'books',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "books_pkey",
        unique: true,
        fields: [
          { name: "id_book" },
        ]
      },
    ]
  });
  }
}
