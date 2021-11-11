const PageNavigation = function({
  previousPage,
  nextPage,
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageIndex,
}) {
  return (
    <div>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </button>
      <div>Go to page:</div>
      <input
        type="number"
        defaultValue={pageIndex + 1 || 1}
        onChange={e => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
      />
    </div>
  );
};

export default PageNavigation;
