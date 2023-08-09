import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BiEdit} from 'react-icons/bi'
import NoteContext from "../Context/Notes/NoteContext";
const NoteItem = ({note,updateNote,showAlert}) => {
 
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const handleDelete=()=>{
    deleteNote(note._id)
    showAlert("deleted","danger")
  }

  return (
    <Col md={3}>
    <Card className='my-2'>
    <Card.Body >
      <Card.Title>{note.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{note.tag}</Card.Subtitle>
      <Card.Text>
       {note.description}
      </Card.Text>
      <footer className="blockquote-footer">
          <cite title="Source Title">{note.date}</cite>
          </footer>
      <RiDeleteBin6Line className='mx-2' style={{cursor:"pointer"}} onClick={handleDelete}/>
      <BiEdit className='mx-2' style={{cursor:"pointer"}} onClick={()=>{updateNote(note)}}/>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default NoteItem