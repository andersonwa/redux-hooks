import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAddCourse } from '../../actions/course';

const CourseList = () => {
  const courses = useSelector(state => state.courses.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(actionAddCourse());
  }

  return (
    <>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>

      <button type="button" onClick={addCourse}>Adicionar Curso</button>
    </>
  )
}

export default CourseList;