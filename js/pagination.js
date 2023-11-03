$(document).ready(function() {
  const pages = $('.video-page');
  let currentPage = 0;

  pages.hide();
  pages.eq(currentPage).show();

  // 添加以下代码来为第一页的按钮添加active类
  $('.page-number').eq(currentPage).addClass('active');

  $('.page-number').on('click', function() {
      const pageNum = $(this).text();
      showPage(parseInt(pageNum));
  });
});
  
  
function showPage(pageNum) {
  // 隐藏所有视频页面
  const pages = document.querySelectorAll('.video-page');
  for (let page of pages) {
    page.style.display = 'none';
  }

  // 显示请求的页面
  document.getElementById('page' + pageNum).style.display = 'block';

  // 更新活动页码按钮
  const pageNumbers = document.querySelectorAll('.page-number');
  for (let pageNumber of pageNumbers) {
    pageNumber.classList.remove('active');
  }
  pageNumbers[pageNum - 1].classList.add('active');
}