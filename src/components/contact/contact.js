import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@material-ui/core';
const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    // email logic is pending
  }

  return (
    <Container fixed>
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={3}>
      <Grid item xs={6} />
      <Grid item xs={6}>
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic" label="Subject" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField
          variant="outlined"
          id="standard-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
          value=""
        />
        </Grid>
        <Grid item xs={6}>
          <Button block variant="contained" color="primary">Submit</Button>
        </Grid>
        </Grid>
      </Grid>
      </form>
      </Container>
  )
}

export default ContactForm;
