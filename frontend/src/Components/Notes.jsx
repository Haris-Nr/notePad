import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import NoteContext from "../Context/Notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false)
  const handleShow = () => setShow(true);

  const navigate=useNavigate();


  const context = useContext(NoteContext);
  const { notes,getNotes,editNote} = context;
useEffect(()=>{
  if(localStorage.getItem('token')){
    getNotes();
  }else{
navigate("/login")
  }
  // eslint-disable-next-line 
},[])



const ref = useRef(null)
const refClose = useRef(null)

const [note, setNote] = useState({
  id:"",
  etitle: "",
  edescription: "",
  etag: "default",
});

const updateNote=(currentNote)=>{
  ref.current.click();
  setNote(
    { id:currentNote._id,
      etitle : currentNote.title,
      edescription : currentNote.description,
      etag : currentNote.tag
    }
    )
   
}


const handleClick = (e) => {
  editNote(note.id,note.etitle,note.edescription,note.etag)
  refClose.current.click();
  props.showAlert("Updated","success");
  

};

const handleChange = (e) => {
  setNote({ ...note, [e.target.name]: e.target.value });
};

  return (
    <>
    <AddNote showAlert={props.showAlert}/>
    <Button className="d-none" variant="primary" onClick={handleShow} ref={ref}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="my-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        name="etitle"
                        value={note.etitle}
                        required
                        minLength={5}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="edescription"
                        placeholder="Description"
                        value={note.edescription}
                        required
                        minLength={5}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tag your Note"
                        name="etag"
                        value={note.etag}
                        onChange={handleChange}
                    />
                </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" className="d-none" onClick={handleClose} ref={refClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
    <Row className="my-3">
      <h5>Your Notes</h5>
      {notes.length===0&&'no notes to display'}
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />;
      })}
    </Row>
    </>
  );
};

export default Notes;
