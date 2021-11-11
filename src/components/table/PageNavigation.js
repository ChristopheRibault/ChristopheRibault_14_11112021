import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: .3em;
`;

const StyledBtn = styled.button`
  padding: .5em;
  cursor: pointer;
  &:disabled {
    cursor: grab;
  }
`;

const PageNavigation = function({
  previousPage,
  nextPage,
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageCount,
}) {

  const pageNumbers = Array
    .apply(null, Array(pageCount))
    .map((_, i) => i + 1);

  return (
    <Wrapper>
      <StyledBtn onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </StyledBtn>
      {
        pageNumbers.map(num => (
          <StyledBtn
            key={`btnToPage${num}`}
            disabled={pageIndex === num - 1}
            onClick={() => gotoPage(num - 1)}
          >{num}</StyledBtn>
        ))
      }
      <StyledBtn onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </StyledBtn>
    </Wrapper>
  );
};

export default PageNavigation;
