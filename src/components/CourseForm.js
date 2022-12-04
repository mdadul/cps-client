import React from 'react'
import Form from './Form'

import TextInput from './TextInput'

export default function CourseForm() {
  return (
    <>
       <Form style={{height:"520px"}}>
        <TextInput
            type="text"
            placeholder ="Enter Course Title"
            required
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Description"
            required
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Duration"
            required
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Price"
            required
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Image Link"
            required
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Category"
            required
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Instructor"
            required
        />
         <button type="submit">ADD Course</button>
       </Form>

    </>
  )
}
