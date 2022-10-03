import styled from 'styled-components'
import { useState } from 'react';
import { Button, Tag, TextField } from '@amsterdam/asc-ui'

const TagsInput = () => {
  const [tagInput, setTagIpunt] = useState('');
  const [tags, setTags] = useState<Array<String>>([]);

  const handleUserInput = (event: { target: { value: string; }; }) => {
    setTagIpunt(event.target.value);
  };

  const resetInputField = () => {
    setTagIpunt("");
  };

  const handleSubmit = () => {
    const value = tagInput
  
    if(!value.trim()) return
      setTags([...tags, value])
    
    resetInputField();
  };

  const handleEnter= (event:any) => {
    event.persist();
    const value = event.target.value

    // If the value is empty, return
    if(!value.trim()) return

    // Add the value to the tags array
    if(event.key === 'Enter') {
      setTags([...tags,value])

      //TODO: loop is one input behind, fixes needed

      resetInputField();
    }
  }

const removeTag = (index:number) =>{
  setTags(tags.filter((el, i) => i !== index))
}
  
  return (
    <TagsInputContainer>
        <label htmlFor="">Tags toevoegen:</label>
        {tags && 
        tags.length > 0 && 
        tags.map((tag, index) => (
          <TagContainer key={index}>
            <Tag>{tag}
            <CloseButton className="close" onClick={() => removeTag(index)}>&times;</CloseButton>
            </Tag>
          </TagContainer>
        ))}
            <RowWrap>
              <TextField 
                placeholder="Typ de gewenste tag" 
                className="tags-input" 
                id="tagInput"
                name="message"
                onChange={handleUserInput}
                onKeyDown={handleEnter}
                value={tagInput}
              />
          
          <Button 
            variant="primary"
            onClick={handleSubmit}
          >
              Toevoegen
          </Button>    
        </RowWrap>
    </TagsInputContainer>
  );
};


export default TagsInput;

const TagsInputContainer = styled.div`
  border: 2px solid #000;
  padding: .5em;
  border-radius: 3px;
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: .5em;
  `

const TagContainer = styled.span`
  margin-right: .5em;
  `

const RowWrap = styled.span`
  display: flex;
  flex-direction: row;
  `

const CloseButton = styled.span`
  height: 20px;
  width: 20px;
  margin-left: .5em;
  font-size: 18px;
  cursor: pointer;
  `
