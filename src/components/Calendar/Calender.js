import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function FormCalendar() {
  
    return (
        <div style={{
          margin: 'auto',
          display: 'block',
          width: 'fit-content'
        }}>
  
          <TextField
            id="date"
            label="Choose your birthdate"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      );
}

export default FormCalendar;