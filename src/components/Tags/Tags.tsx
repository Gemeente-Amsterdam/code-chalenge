import { useState } from 'react';
import { Button, Tag, TextField } from '@amsterdam/asc-ui'


interface TagsProps {}

const Tags = () => {

  const [message, setMessage] = useState('');

  const handleChange = (event: { target: { value: string; }; }) => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  
  return (
    <div>
       <TextField 
          placeholder="Enter the tag here" 
          name="message"
          onChange={handleChange}
          value={message}
        />
        <Button 
          variant="primary">
            Click me!
        </Button>

        <h2>Message: {message}</h2>
        <br/>
        <Tag>{message}</Tag>
        
    </div>
  );
};

export default Tags;
