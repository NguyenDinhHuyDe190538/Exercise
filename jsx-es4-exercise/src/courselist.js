import React from 'react';

function courseList() {

const courses = ['React', 'ReactNative', 'NodeJS'];

    return (
        <div>
            <h2 style={{ fontSize: '48px' }}> <strong>Course Names</strong></h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    )


}
export default courseList;