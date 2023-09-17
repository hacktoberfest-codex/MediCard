import React, { useState } from 'react';

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'

// ** icons
import { AiOutlineSend } from 'react-icons/ai'

const TypographyTexts = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <Card>
      <CardHeader title='Self Help Center' titleTypographyProps={{ variant: 'h6' }} />
      <div style={{ padding: '16px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Display chat messages */}
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} lg={12}>
            {/* Message input */}
            <div style={{ display: 'flex', position: 'absolute', bottom: '5rem', width: '75%' }}>
              <TextField
                fullWidth
                label='Type your message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <IconButton color='primary' onClick={handleSendMessage}>
                <AiOutlineSend />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </Card>
  )
}

export default TypographyTexts
