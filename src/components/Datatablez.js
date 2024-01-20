import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const DataTablez = ({ value, children }) => {
      const actionBodyTemplate = (rowData) => {
            return (
                  <div className='flex gap-2'>
                        <Button icon="pi pi-file-edit" className=" p-button-success p-mr-2" />
                        <Button icon="pi pi-trash" className=" p-button-danger" />
                  </div>
            );
      };

      const indexBodyTemplate = (rowData, row) => {
            return row.rowIndex + 1;
      };

      const newChildren = [
            <Column key="stt" body={indexBodyTemplate} header="STT"></Column>,
            ...React.Children.toArray(children),
            <Column key="action" body={actionBodyTemplate} header="Hành động"></Column>
      ];

      return (
            <DataTable value={value}>
                  {newChildren}
            </DataTable>
      );
};

export default DataTablez;
