const CourseList = () => {
  const courses = ['React', 'ReactNative', 'NodeJs']; // Danh sách từ 

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Course names</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} style={{ fontSize: '20px', marginBottom: '10px' }}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;