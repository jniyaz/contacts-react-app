import React, { useRef } from 'react';
import { Button, Form, Grid, Input, Segment, Select, TextArea, Header as SemanticHeader, Card, Icon, Image } from 'semantic-ui-react';
import countries from '../../../utils/countries';
import { Prompt } from 'react-router-dom';
import "./index.css";

const CreateContact = ({ onChange, form, onSubmit, formInvalid, formHalfFilled, loading, onImageChange, tempFile }) => {
    const imagePickRef = useRef(null);
    const chooseImage = () => {
        if (imagePickRef) {
            imagePickRef.current.click();
        }
    }

    return (
        <>
            <Prompt when={formHalfFilled} message={JSON.stringify({ header: "Confirm", content: "You have unsaved changes, Are you sure, want to leave?" })} />
            <Grid centered>
                <Grid.Column className="form-column">
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <Card.Content>
                            <Form unstackable>
                                <div className="image-wrapper"> 
                                    {tempFile && <div className="avatar-image">
                                        <Image src={tempFile} />
                                    </div>}
                                    {!tempFile && <div onClick={chooseImage} className="avatar-image">Choose Picture</div>}
                                    <Icon name="pencil" onClick={chooseImage} />
                                </div>
                                <input onChange={onImageChange} ref={imagePickRef} type="file" hidden />
                                <Form.Group widths={2}>
                                    <Form.Input label='First name' placeholder='First name' name="firstName" onChange={onChange} />
                                    <Form.Input label='Last name' placeholder='Last name' name="lastName" onChange={onChange} />
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Input control={Select} options={countries} label='Country' placeholder='Country' name="countryCode" onChange={onChange} />
                                    <Form.Input label='Phone' placeholder='Phone Number' name="phoneNumber" onChange={onChange} />
                                </Form.Group>
                                {/* <Form.Field>
                                    <Form.Input type="file" label='Avatar' placeholder='Avatar' />
                                </Form.Field> */}
                                <Form.Checkbox label='Favourite' name="firstName" name="isFavourite" onChange={(e, data) => onChange(e, { name: "isFavourite", value: data.checked })} />
                                <Button onClick={onSubmit} loading={loading} disabled={formInvalid || loading} primary type='submit'>Submit</Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </>
    )
};

export default CreateContact;
