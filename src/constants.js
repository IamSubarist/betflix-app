import {
  AutoAwesome,
  StarPurple500,
  Bloodtype,
  MenuBook,
  FamilyRestroom,
  VolunteerActivism,
  MoodBad,
  Pool,
  LiveTv,
  LocalMovies,
  Reorder,
  Fort,
} from '@mui/icons-material';

export const ICON_COMPONENTS = {
  AutoAwesome,
  StarPurple500,
  Bloodtype,
  MenuBook,
  FamilyRestroom,
  VolunteerActivism,
  MoodBad,
  Pool,
  LiveTv,
  LocalMovies,
  Reorder,
  Fort,
};

export const TOP_LIST = [
  {
    title: 'ТОП-100 популярных фильмов',
    icon: 'AutoAwesome',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'ТОП-250 лучших фильмов',
    icon: 'StarPurple500',
    url: '/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vampire',
    value: 'VAMPIRE_THEME',
  },
  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombie',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: '/catastrophe',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popular-serials',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/serials',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
  },
];
