const Pagination = function({ pageIndex, pageOptions }) {
  
  return (
    <div>
    Page{' '}
    <em>
      {pageIndex + 1} of {pageOptions.length}
    </em>
  </div>
  );
};

export default Pagination;
