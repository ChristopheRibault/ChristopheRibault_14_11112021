import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { TableComponents } from '.';
import tableColumns from '../data/tableColumns.json';

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
    pageOptions,
    page,
    state: { pageIndex, pageSize, globalFilter },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );


  return (
    <>
      <ShowSelect pageSize={pageSize} setPageSize={setPageSize}/>
      <SearchInput
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <table {...getTableProps()}>
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
      </table>
      <Pagination pageIndex={pageIndex} pageOptions={pageOptions} />
      <PageNavigation
        previousPage={previousPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageIndex={pageIndex}
      />

    </>
  );
};

export default EmployeesTable;
