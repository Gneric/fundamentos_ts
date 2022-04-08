import { subDays, format, sub } from 'date-fns'

const date = new Date(1999, 2, 28)
const rta = subDays(date, 20)
const date_str = format(rta, "yyyy/MM/dd")
console.log(date_str)


import _ from 'lodash';

const data = [
  {
    username: 'user1',
    role: 'ventas'
  },
  {
    username: 'user2',
    role: 'ventas'
  },
  {
    username: 'user3',
    role: 'marketing'
  },
  {
    username: 'user4',
    role: 'marketing'
  }
]

const rta2 = _.groupBy( data, (item) => item.role);
console.log(rta2)
