const moment = jest.requireActual('moment')

const getMoment = (timestamp = 0) => {
  return moment(timestamp)
}

export default getMoment
