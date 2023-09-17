import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

// ** mui componenets
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import { AiOutlineUpload } from 'react-icons/ai'
import { RiPlayListAddLine } from 'react-icons/ri'
import { MdDeleteOutline } from 'react-icons/md'
// import { TbReplace } from 'react-icons/tb'

const ImageTextExtractor = () => {
  // const [extractedText, setExtractedText] = useState('');
  // const [imageUploaded, setImageUploaded] = useState(false);

  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const { data: { text } } = await Tesseract.recognize(file);
  //     setExtractedText(text);
  //     setImageUploaded(true);
  //   }
  // };

  // ** get input as img or pdf and just render thta input
  //TODO this is just for temp we will make an NLP model to extract data from prescritpion to auto upload

  const [selectedFile, setSelectedFile] = useState(null);
  const [fields, setFields] = useState([
    { medicineName: '', purposeAndFeedbacks: '' },
  ]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const addMoreFields = () => {
    setFields([...fields, { medicineName: '', purposeAndFeedbacks: '' }]);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

    const deleteLastField = () => {
    if (fields.length > 1) {
      const updatedFields = [...fields];
      updatedFields.pop(); // Remove the last field
      setFields(updatedFields);
    }
    };

  return (
    <Grid container>
      <Grid item lg={12} style={{ margin: '1.5rem 0' }}>
        <Typography variant='h6' style={{ color: '#9155FD ', alignItems: 'center' }}>
          All Medical Records
        </Typography>
      </Grid>
      <Grid item lg={6} sm={12}>
        <Card>
          {/* <CardHeader title='Basic' titleTypographyProps={{ variant: 'h6' }} /> */}
          <CardContent>
            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={5}>
                {/* <Grid item xs={12}>
                  <TextField fullWidth label='Medicine Name' placeholder='Medicine Name' />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextarea
                    aria-label="empty textarea"
                    placeholder="Enter Purpose And Feedbacks"
                    style={{ height: '15vh', width: '100%' }}

                  />
                </Grid> */}
                {fields.map((field, index) => (
                  <Grid item xs={12} key={index}>
                    <Grid item lg={12} >
                      <TextField
                        fullWidth
                        label='Medicine Name'
                        placeholder='Medicine Name'
                        value={field.medicineName}
                        onChange={(e) => handleFieldChange(index, 'medicineName', e.target.value)}
                      />
                    </Grid>
                    <Grid item lg={12} >
                      {/* <textarea
                        aria-label="textarea"
                        placeholder="Enter Purpose And Feedbacks"
                        style={{ height: '15vh', width: '100%' }}
                        value={field.purposeAndFeedbacks}
                        onChange={(e) => handleFieldChange(index, 'purposeAndFeedbacks', e.target.value)}
                      /> */}
                      <textarea
                        aria-label="textarea"
                        placeholder="Enter Purpose And Feedbacks"
                        style={{
                          height: '15vh',
                          width: '100%',

                        }}
                        value={field.purposeAndFeedbacks}
                        onChange={(e) => handleFieldChange(index, 'purposeAndFeedbacks', e.target.value)}
                      ></textarea>
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={12} lg={12} style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }} >
                  <Button
                    component="label"
                    variant="contained"
                    color="primary"
                    startIcon={<MdDeleteOutline />}
                    onClick={deleteLastField}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<RiPlayListAddLine />}
                    onClick={addMoreFields}
                  >
                    Add More
                  </Button>
                  <Button
                    component="label"
                    variant="contained"
                    color="primary"
                    startIcon={<AiOutlineUpload />}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={6} sm={12}>
        <Card>

          {/* {imageUploaded ? (
          <div>
            <textarea
              value={extractedText}
              readOnly
              style={{
                background: 'inherit',
                border: 'none',
                outline: 'none',
                boxShadow: '0 4px 4px 6px #decdfe',
                width: '100%',
                height: '50vh'
              }}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              startIcon={<TbReplace />}
              onClick={() => setImageUploaded(false)}
              style={{
                margin: '2rem'
              }}
            >
              Chnage Prescription
            </Button>
          </div>
        ) : (
          <label className="custom-file-upload">
            <Button
              component="label"
              variant="contained"
              color="primary"
              startIcon={<AiOutlineUpload />}
            >
              Upload Prescription
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </Button>
          </label>
        )} */}
          <Button
            component="label"
            variant="contained"
            color="primary"
            startIcon={<AiOutlineUpload />}
          >
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              variant="contained"
            />
          </Button>
          {selectedFile && (
            <div>
              <p>Selected File: {selectedFile.name}</p>
              {selectedFile.type.startsWith('image/') ? (
                <img src={URL.createObjectURL(selectedFile)} alt="Uploaded File" style={{ width: '90%' }} />
              ) : (
                <embed src={URL.createObjectURL(selectedFile)} width="100%" />
              )}
            </div>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageTextExtractor;
