import low from '../../assets/options/low.png'
import middle from '../../assets/options/middle.png'
import high from '../../assets/options/high.png'

export const startDestinationOptions = [
  { value: 'Пулково (LED)', label: 'Пулково (LED)' },
  { value: 'Кинотеатр Аврора', label: 'Кинотеатр Аврора' },
  { value: 'Мариинский театр', label: 'Мариинский театр' },
]

export const finishDestinationOptions = [
  { value: 'Эрмитаж', label: 'Эрмитаж' },
  { value: 'Кинотеатр Аврора', label: 'Кинотеатр Аврора' },
  { value: 'Мариинский театр', label: 'Мариинский театр' },
]

export const options = [
  {
    title: 'Стандарт',
    price: 150,
    imageUrl: low
  },
  {
    title: 'Премиум',
    price: 250,
    imageUrl: middle
  },
  {
    title: 'Бизнес',
    price: 300,
    imageUrl: high
  },
]