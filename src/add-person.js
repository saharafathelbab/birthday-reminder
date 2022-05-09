import React, {useState} from 'react';
import { Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

const AddForm = () => {

    //to track what is typed in name, the function to change it
    const [name,setName] = useState('');

    //to track what is typed in Age, the function to change it
    const [age,setUserAge] = useState(0)
    // const userId = 2;

    //to track what is typed in image, the function to change it
    const [image,setimageURL] = useState('');

    const navigate = useNavigate(); //invoking our useNavigate

    const handleSubmit = (e) =>{
        //prevent default action of page refeshing after submit
        e.preventDefault();

        const ourPerson = {name, age, image};

        fetch('http://localhost:4000/people', {

            // we define the type of request we're sending
            method: 'POST',
            headers: {"Content-Type": "application/json"}, //to define the content that is being sent - we are sending json data
            body: JSON.stringify(ourPerson) //actual data we are sending with this request - convert from an object with a json string
        }).then(()=>{
            console.log('new message added');
            // history.go(-1) //back one
            // history.go(-1) //forward one page

            navigate('/'); // to home page
        })

    }

    return (

        <center>
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Field>

                    <label style={style.h3}>Name</label>

                    <input
                        required 
                        id="name"
                        value={name} //whatever this value is will show in our above const name
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name' 
                        type="text">
                    </input>



                </Form.Field>

                <Form.Field>

                <label style={style.h3}>Age</label>

                <input
                    required 
                    id="age"
                    value={age} //whatever this value is will show in our above const age
                    onChange={(e) => setUserAge(parseInt(e.target.value))}
                    placeholder='Name' 
                    type="number">
                </input>



                </Form.Field>

                <Form.Field>

                    <label style={style.h3}>Image URL</label>

                    <input 
                        required
                        id="theMessage"
                        value={image} //whatever this value is will show in our above const image
                        onChange={(e) => setimageURL(e.target.value)}
                        placeholder='Image URL Here' 
                        type="text">
                    </input>

                </Form.Field>

                <button type='submit'>Submit</button>
            </Form>
        </div>
        </center>

    )
}

export default AddForm;