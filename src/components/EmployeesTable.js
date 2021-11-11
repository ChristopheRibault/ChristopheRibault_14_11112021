import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import styled from 'styled-components';
import { TableComponents } from '.';
import tableColumns from '../data/tableColumns.json';

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  min-width: 600px;
  width: 80%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: 1px solid black;

  & > thead {
    border-bottom: 1px solid black;
  }

  & tr {
    height: 40px;
  }

  & td {
    padding: 5px;
  }

  tbody tr:nth-child(odd) {
    background-color: #fff;
  }
  
  tbody tr:nth-child(even) {
    background-color: #eee;
    border-bottom: #ccc solid 1px;
    border-top: #ccc solid 1px;
  }
`;

const EmployeesTable = function() {
  const employees = useSelector(state => state.employees);
  const { 
    ShowSelect,
    Pagination,
    PageNavigation,
    SearchInput,
  } = TableComponents;

  const data = useMemo(() => employees, [employees]);
  const columns = useMemo(() => tableColumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageCount,
    page,
    state: { pageIndex, pageSize, globalFilter },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );


  return (
    <TableWrapper>
      <OptionsWrapper>
        <ShowSelect pageSize={pageSize} setPageSize={setPageSize}/>
        <SearchInput
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      </OptionsWrapper>
      <StyledTable {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </th>
                ))
              }
            </tr>
          ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </StyledTable>
      <OptionsWrapper>
        <Pagination
          pageIndex={pageIndex}
          count={preGlobalFilteredRows.length}
          page={page}
        />
        <PageNavigation
          previousPage={previousPage}
          nextPage={nextPage}
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageIndex={pageIndex}
          pageCount={pageCount}
        />
      </OptionsWrapper>
    </TableWrapper>
  );
};

export default EmployeesTable;
