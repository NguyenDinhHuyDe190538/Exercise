

// 1. Xử lý mảng people 
export const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
];

// Tìm người đầu tiên là teenager (10-20 tuổi) - Dùng .find
export const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);

// Tìm TẤT CẢ những người là teenager - Dùng .filter
export const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);

// Kiểm tra mọi người có phải là teen không - Dùng .every (trả về true/false)
export const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);

// Kiểm tra có ít nhất 1 người là teen không - Dùng .some (trả về true/false)
export const isAnyTeen = people.some(p => p.age >= 10 && p.age <= 20);


// 2. Xử lý mảng số và Companies
export const array = [1, 2, 3, 4]; // (Đã sửa lỗi thiếu dấu đóng ngoặc vuông của bạn)

// Tính tổng mảng bằng .reduce
export const sumArray = array.reduce((acc, val) => acc + val, 0);

export const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
];

// In tên công ty bằng forEach
export const printCompanyNames = () => companies.forEach(c => console.log(c.name));

// Tạo object mới từ companies[0] bằng Destructuring (Yêu cầu trong Word)
export const getFirstCompanyInfo = () => {
  const { name, category } = companies[0]; // Lấy name và category ra từ phần tử đầu tiên
  return {
    name,
    category,
    print() { console.log(this.name); } // Thêm phương thức print theo yêu cầu
  };
};


// 3. Hàm nhận vô số đối số (Rest Parameters)
// Tính tổng các số truyền vào
export const sumAll = (...args) => args.reduce((acc, val) => acc + val, 0);

// Nhận bất kỳ kiểu dữ liệu nào, nếu là mảng thì gộp vào (Yêu cầu gộp mảng)
export const collectAll = (...args) => {
  return args.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? val : [val]);
  }, []);
};


// 4. Destructuring thuộc tính 'street' từ một object person
const person = { name: 'Huy', address: { street: 'FPT University', city: 'Da Nang' } };
export const { address: { street } } = person;


// 5. Hàm Closure (Mỗi lần gọi sẽ tăng số lên 1 đơn vị từ 0)
export const createCounter = () => {
  let count = 0;
  return () => count++;
};


// 6. Promise trả về số ngẫu nhiên > 5
export const getRandomAfter5 = () => {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    num > 5 ? resolve(num) : reject("Error");
  });
};