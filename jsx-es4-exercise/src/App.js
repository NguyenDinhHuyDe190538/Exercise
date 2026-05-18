import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';

// Import thêm các biến mới từ file logic
import { 
  people, 
  firstTeen, 
  allTeens, 
  getRandomAfter5 
} from './logic/es6_exercises';

function App() {
  // Tạo state để lưu kết quả của Promise
  const [promoResult, setPromoResult] = useState('');

  // Chạy Promise khi ứng dụng vừa load
  useEffect(() => {
    getRandomAfter5()
      .then(num => setPromoResult(`Số ngẫu nhiên hợp lệ: ${num}`))
      .catch(err => setPromoResult(`Lỗi Promise: ${err}`));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Phần tiêu đề chính */}
      <h1 style={{ fontSize: '40px', textAlign: 'center', marginTop: '30px' }}>
        Hello <span style={{ color: 'blue' }}>React</span>
      </h1>

      {/* 3. Logo và mô tả */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo" 
          style={{ width: '200px' }} 
        />
        <p>This is the React logo!</p>
        <p style={{ fontStyle: 'italic', color: 'gray' }}>(I don't know why it is here either)</p>
        <p>The library for web and native user interfaces</p>
      </div>

      <hr />

      {/* 4. Hiển thị kết quả thực thi ES6 */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h2 style={{ color: 'blue' }}>ES6 Exercise Results</h2>
        
        {/* Hiển thị teen đầu tiên */}
        <p><strong>First Teen:</strong> {firstTeen ? `${firstTeen.name} (${firstTeen.age})` : 'Not found'}</p>
        
        {/* Hiển thị tất cả teen */}
        <p><strong>All Teens:</strong> {allTeens.map(p => p.name).join(', ')}</p>
        
        {/* Hiển thị kết quả Promise */}
        <p><strong>Promise Status:</strong> {promoResult}</p>
      </div>

      <hr />

      {/* 5. Danh sách khóa học */}
      <h2 style={{ color: 'blue' }}>This is JSX</h2>
      <CourseList />
    </div>
  );
}

export default App;