import React from 'react'
import styled from 'styled-components'
import {
  addDays,
  format,
  isBefore,
  isSameDay,
  isFirstDayOfMonth,
  startOfYear
} from 'date-fns'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 16px;
  
  & > * {
    flex: 0 0 auto;
  }
`

const YearHash = styled.div`
  border: 1px solid #ace;
  height: 5px;
  width: 30px;
  
  &::before {
    border: 1px solid red;
    bottom: 12px;
    content: "";
    display: block;
    left: 12px;
    position: relative;
    height: 30px;
    width: 5px;
  }
`

const MonthHash = styled.div`
  border: 1px solid #ace;
  height: 5px;
  width: 30px;
  
  &::before {
    border: 1px solid red;
    bottom: 8px;
    content: "";
    display: block;
    left: 12px;
    position: relative;
    height: 20px;
    width: 5px;
  }
`

const DayHash = styled.div`
  border: 1px solid #ace;
  height: 5px;
  width: 30px;
  
  &::before {
    border: 1px solid red;
    bottom: 6px;
    content: "";
    display: block;
    left: 12px;
    position: relative;
    height: 15px;
    width: 5px;
  }
`

const startDate = new Date(2013, 11, 1)
const endDate = new Date(2014, 8, 18)

function Timeline ({ start_date, end_date }: { start_date: Date, end_date: Date }) {
  let workingDate = start_date
  const components = []
  while (isBefore(workingDate, end_date)) {
    if (isSameDay(workingDate, startOfYear(workingDate))) {
      components.push(<YearHash title={format(workingDate, 'y MMMM do')} />)
    } else if (isFirstDayOfMonth(workingDate)) {
      components.push(<MonthHash title={format(workingDate, 'y MMMM do')} />)
    } else {
      components.push(<DayHash title={format(workingDate, 'y MMMM do')} />)
    }
    workingDate = addDays(workingDate, 1)
  }

  return components
}

export default function ({ start_date, end_date }: {start_date: Date, end_date: Date }) {
  return (
    <Container>
      <Timeline start_date={ startDate } end_date={ endDate }/>
    </Container>
  )
}
