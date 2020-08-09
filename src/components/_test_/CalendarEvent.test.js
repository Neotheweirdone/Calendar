import React from 'react'
import ReactDOM from 'react-dom'
import CalendarEvent from '../CalendarEvent'

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<CalendarEvent/>,div)
})