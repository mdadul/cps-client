import React from 'react'
import {useRef} from 'react'
import Form from './Form'

import TextInput from './TextInput'

export default function CourseForm() {
    const imageRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const totalClassRef = useRef();
    const totalLectureRef = useRef();
    const totalTimeRef = useRef();
    const totalStudentRef = useRef();


    const handleCourseForm=e=>{
        e.preventDefault();

        const image = imageRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const totalClass = totalClassRef.current.value;
        const totalLecture = totalLectureRef.current.value;
        const totalTime = totalTimeRef.current.value;
        const totalStudent = totalStudentRef.current.value;

        const newCourse = {image, title, price, totalClass, totalLecture, totalTime,totalStudent};

        // post couse via API
        fetch('https://',{
            method : 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json)
            .then(data=>{
                if(data.insertedId){
                    alert('Successfully added the Course!')
                    e.target.reset();
                }
            })
    }
  return (
    <>
       <Form style={{height:"520px"}}
       onSubmit ={handleCourseForm}>
        <TextInput
            type="text"
            placeholder ="Enter Image Link"
            required
            ref = {imageRef}
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Title"
            required
            ref={titleRef}
        />
        <TextInput
            type="text"
            placeholder ="Enter Course Price"
            required
            ref={priceRef}
        />
        <TextInput
            type="text"
            placeholder ="Enter Total Classes"
            required
            ref = {totalClassRef}
        />
        <TextInput
            type="text"
            placeholder ="Enter Total Lecture Sheet"
            required
            ref ={totalLectureRef}
        />
        <TextInput
            type="text"
            placeholder ="Enter Total Time to finish"
            required
            ref = {totalTimeRef}
        />
        <TextInput
            type="text"
            placeholder ="Enter Total Enrolled Student"
            required
            ref = {totalStudentRef}
        />
         <button type="submit">ADD Course</button>
       </Form>

    </>
  )
}
