import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import NoteContext from "../Context/Notes/NoteContext";
const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: "",
    });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({
            title: "",
            description: "",
            tag: "",
        })
        props.showAlert("Added","success");
    };
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    return (
        <Container className="my-3">
            <h1>Add a Note</h1>
            <Form className="my-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                        required
                        minLength={5}
                        value={note.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        placeholder="Description"
                        required
                        minLength={5}
                        value={note.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tag your Note"
                        name="tag"
                        value={note.tag}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Add Note
                </Button>
            </Form>
        </Container>
    );
};

export default AddNote;
