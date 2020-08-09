import React, { Component, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal, Button } from 'react-bootstrap'


function CalendarEvent() {

    const [nameEvent, setName] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [date, setDate] = useState('');
    const [sourceId, setSourceId] = useState(2);
    const [noteList, setList] = useState([{ id: 1, title: 'Discussion Meet', date: '2020-08-04' }]);

    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseConfirm = () => setShowConfirm(false);

    {/*save note*/ }
    const handleSaveEvent = e => {
        setSourceId(sourceId + 1);
        const addEvent = { 'id': sourceId, 'title': nameEvent, 'date': date };
        setList([...noteList, addEvent]);
        setName('');
        setShow(false);
    };

    {/*select date*/ }
    const handleDateClick = e => {
        setDate(e.dateStr);
        setShow(true);
    };

    {/*delete id*/ }
    const handleEventClick = e => {
        const id = e.event._def.title;
        setDeleteId(id);
        setShowConfirm(true);
    };

    {/*delete note*/ }
    const handleDeleteEventConfirm = e => {
        
        const newNoteList = noteList.filter((x) => x.title !== deleteId);

        setList(newNoteList);
        setShowConfirm(false);
    };

    return (
        <div className="calendar-container">
            {/*Add Note*/}

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => setName(e.target.value)}
                        value={nameEvent}
                        placeholder="Note Name"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                        </Button>
                    <Button variant="primary" onClick={handleSaveEvent}>
                        Save
                        </Button>
                </Modal.Footer>
            </Modal>

            {/*Delete Note*/}

            <Modal show={showConfirm} onHide={handleCloseConfirm} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this Note?
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseConfirm}>
                        Cancel
                        </Button>
                    <Button variant="primary" onClick={handleDeleteEventConfirm}>
                        Delete
                        </Button>
                </Modal.Footer>
            </Modal>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                selectable={true}
                events={noteList}

            />
        </div>
    );
}



export default CalendarEvent