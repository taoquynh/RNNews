/**
 * Hàm xử lý lọc các bài viết giống nhau
 */

const filterForUniqueArticles = (arr) => {
  const cleaned = [];
  arr.forEach((item) => {
    let unique = true;
    cleaned.forEach((item2) => {
      const isEqual = JSON.stringify(item) === JSON.stringify(item2);
      if (isEqual) unique = false;
    });
    if (unique) cleaned.push(item);
  });
  return cleaned;
};

export default filterForUniqueArticles;
