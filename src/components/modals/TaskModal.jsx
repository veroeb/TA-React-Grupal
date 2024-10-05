import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addTask, updateTask } from '../state/StateManager';

function TaskModal({ state, dispatch }) {

    const [title, setTitle] = useState(state.taskToUpdate ? state.taskToUpdate.title : '');
    const [description, setDescription] = useState(state.taskToUpdate ? state.taskToUpdate.description : '');
    const [assignedTo, setAssignedTo] = useState(state.taskToUpdate ? state.taskToUpdate.assignedTo : '');
    const [priority, setPriority] = useState(state.taskToUpdate ? state.taskToUpdate.priority : '');
    const [status, setStatus] = useState(state.taskToUpdate ? state.taskToUpdate.status : '');
    const [endDate, setEndDate] = useState(state.taskToUpdate ? state.taskToUpdate.endDate : '');
    const [id, setId] = useState(state.taskToUpdate ? state.taskToUpdate.id : '');

    const handleSubmit = () => {
        const task = {
            title,
            description,
            assignedTo,
            priority,
            status,
            endDate,
            id
        };
        if (state.taskToUpdate) {
            updateTask(dispatch, task);
        } else {
            addTask(dispatch, task);
        }
        handleClose();
    };

    const handleClose = () => {
        dispatch({ type: 'UPDATE_SHOW_TASK_MODAL', payload: false });
        dispatch({ type: 'SET_TASK_TO_UPDATE', payload: null });
    };

    useEffect(() => {
        setTitle(state.taskToUpdate ? state.taskToUpdate.title : '');
        setDescription(state.taskToUpdate ? state.taskToUpdate.description : '');
        setAssignedTo(state.taskToUpdate ? state.taskToUpdate.assignedTo : '');
        setPriority(state.taskToUpdate ? state.taskToUpdate.priority : '');
        setStatus(state.taskToUpdate ? state.taskToUpdate.status : '');
        setEndDate(state.taskToUpdate ? state.taskToUpdate.endDate : '');
        setId(state.taskToUpdate ? state.taskToUpdate.id : '');
    }, [state.taskToUpdate]);

    return (
        <Modal show={state.showTaskModal} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>{state.taskToUpdate ? 'Editar tarea' : 'Crear tarea'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Descripción' />
                    </Form.Group>
                    <Form.Group controlId="formAssignedTo">
                        <Form.Label>Asignado a</Form.Label>
                        <Form.Control type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} placeholder="Asignado a" />
                    </Form.Group>
                    <Form.Group controlId="formPriority">
                        <Form.Label>Prioridad</Form.Label>
                        <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Prioridad">
                            <option value="">-</option>
                            <option value="Low">Baja</option>
                            <option value="Medium">Media</option>
                            <option value="High">Alta</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">-</option>
                            {state.statusArray.map((status) => {
                                return <option key={status} value={status}>{status}</option>;
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formEndDate">
                        <Form.Label>Fecha de finalización</Form.Label>
                        <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TaskModal;