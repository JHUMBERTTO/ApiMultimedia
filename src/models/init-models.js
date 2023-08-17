import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _audio_books from  "./audio_books.js";
import _audios from  "./audios.js";
import _books from  "./books.js";
import _comics from  "./comics.js";
import _creators from  "./creators.js";
import _genre from  "./genre.js";
import _genre_audio from  "./genre_audio.js";
import _genre_text from  "./genre_text.js";
import _genre_video from  "./genre_video.js";
import _mangas from  "./mangas.js";
import _movies from  "./movies.js";
import _multimedias from  "./multimedias.js";
import _podcasts from  "./podcasts.js";
import _publishers from  "./publishers.js";
import _series from  "./series.js";
import _social_videos from  "./social_videos.js";
import _songs from  "./songs.js";
import _texts from  "./texts.js";
import _tipo_archivo from  "./tipo_archivo.js";
import _videos from  "./videos.js";

export default function initModels(sequelize) {
  const audio_books = _audio_books.init(sequelize, DataTypes);
  const audios = _audios.init(sequelize, DataTypes);
  const books = _books.init(sequelize, DataTypes);
  const comics = _comics.init(sequelize, DataTypes);
  const creators = _creators.init(sequelize, DataTypes);
  const genre = _genre.init(sequelize, DataTypes);
  const genre_audio = _genre_audio.init(sequelize, DataTypes);
  const genre_text = _genre_text.init(sequelize, DataTypes);
  const genre_video = _genre_video.init(sequelize, DataTypes);
  const mangas = _mangas.init(sequelize, DataTypes);
  const movies = _movies.init(sequelize, DataTypes);
  const multimedias = _multimedias.init(sequelize, DataTypes);
  const podcasts = _podcasts.init(sequelize, DataTypes);
  const publishers = _publishers.init(sequelize, DataTypes);
  const series = _series.init(sequelize, DataTypes);
  const social_videos = _social_videos.init(sequelize, DataTypes);
  const songs = _songs.init(sequelize, DataTypes);
  const texts = _texts.init(sequelize, DataTypes);
  const tipo_archivo = _tipo_archivo.init(sequelize, DataTypes);
  const videos = _videos.init(sequelize, DataTypes);

  audio_books.belongsTo(audios, { as: "audio", foreignKey: "audio_id"});
  audios.hasMany(audio_books, { as: "audio_books", foreignKey: "audio_id"});
  genre_audio.belongsTo(audios, { as: "audio", foreignKey: "audio_id"});
  audios.hasMany(genre_audio, { as: "genre_audios", foreignKey: "audio_id"});
  podcasts.belongsTo(audios, { as: "audio", foreignKey: "audio_id"});
  audios.hasMany(podcasts, { as: "podcasts", foreignKey: "audio_id"});
  songs.belongsTo(audios, { as: "audio", foreignKey: "audio_id"});
  audios.hasMany(songs, { as: "songs", foreignKey: "audio_id"});
  multimedias.belongsTo(creators, { as: "creator", foreignKey: "creator_id"});
  creators.hasMany(multimedias, { as: "multimedia", foreignKey: "creator_id"});
  genre_audio.belongsTo(genre, { as: "genre", foreignKey: "genre_id"});
  genre.hasMany(genre_audio, { as: "genre_audios", foreignKey: "genre_id"});
  genre_text.belongsTo(genre, { as: "genre", foreignKey: "genre_id"});
  genre.hasMany(genre_text, { as: "genre_texts", foreignKey: "genre_id"});
  genre_video.belongsTo(genre, { as: "genre", foreignKey: "genre_id"});
  genre.hasMany(genre_video, { as: "genre_videos", foreignKey: "genre_id"});
  audios.belongsTo(multimedias, { as: "multimedium", foreignKey: "multimedia_id"});
  multimedias.hasMany(audios, { as: "audios", foreignKey: "multimedia_id"});
  texts.belongsTo(multimedias, { as: "multimedium", foreignKey: "multimedia_id"});
  multimedias.hasMany(texts, { as: "texts", foreignKey: "multimedia_id"});
  videos.belongsTo(multimedias, { as: "multimedium", foreignKey: "multimedia_id"});
  multimedias.hasMany(videos, { as: "videos", foreignKey: "multimedia_id"});
  multimedias.belongsTo(publishers, { as: "publisher", foreignKey: "publisher_id"});
  publishers.hasMany(multimedias, { as: "multimedia", foreignKey: "publisher_id"});
  books.belongsTo(texts, { as: "text", foreignKey: "text_id"});
  texts.hasMany(books, { as: "books", foreignKey: "text_id"});
  comics.belongsTo(texts, { as: "text", foreignKey: "text_id"});
  texts.hasMany(comics, { as: "comics", foreignKey: "text_id"});
  mangas.belongsTo(texts, { as: "text", foreignKey: "text_id"});
  texts.hasMany(mangas, { as: "mangas", foreignKey: "text_id"});
  audios.belongsTo(tipo_archivo, { as: "tipo_archivo", foreignKey: "tipo_archivo_id"});
  tipo_archivo.hasMany(audios, { as: "audios", foreignKey: "tipo_archivo_id"});
  texts.belongsTo(tipo_archivo, { as: "tipo_archivo", foreignKey: "tipo_archivo_id"});
  tipo_archivo.hasMany(texts, { as: "texts", foreignKey: "tipo_archivo_id"});
  videos.belongsTo(tipo_archivo, { as: "tipo_archivo", foreignKey: "tipo_archivo_id"});
  tipo_archivo.hasMany(videos, { as: "videos", foreignKey: "tipo_archivo_id"});
  genre_text.belongsTo(videos, { as: "text", foreignKey: "text_id"});
  videos.hasMany(genre_text, { as: "genre_texts", foreignKey: "text_id"});
  genre_video.belongsTo(videos, { as: "video", foreignKey: "video_id"});
  videos.hasMany(genre_video, { as: "genre_videos", foreignKey: "video_id"});
  movies.belongsTo(videos, { as: "video", foreignKey: "video_id"});
  videos.hasMany(movies, { as: "movies", foreignKey: "video_id"});
  series.belongsTo(videos, { as: "video", foreignKey: "video_id"});
  videos.hasMany(series, { as: "seriess", foreignKey: "video_id"});
  social_videos.belongsTo(videos, { as: "video", foreignKey: "video_id"});
  videos.hasMany(social_videos, { as: "social_videos", foreignKey: "video_id"});

  return {
    audio_books,
    audios,
    books,
    comics,
    creators,
    genre,
    genre_audio,
    genre_text,
    genre_video,
    mangas,
    movies,
    multimedias,
    podcasts,
    publishers,
    series,
    social_videos,
    songs,
    texts,
    tipo_archivo,
    videos,
  };
}
