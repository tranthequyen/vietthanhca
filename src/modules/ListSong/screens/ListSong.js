import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useListUser } from '../utils';
function ListSong() {
      const data = useListUser()
      console.log(data);
      return (
            <div>

                  <DataTable value={data} >
                        <Column field="username" header="Tên người dùng" style={{ width: '25%' }}></Column>
                        <Column field="email" header="Email" style={{ width: '25%' }}></Column>
                        <Column field="admin" header="Chức vụ" style={{ width: '25%' }}></Column>
                        <Column field="representative.name" header="Hành động" style={{ width: '25%' }}></Column>
                  </DataTable>
            </div>
      )
}

export default ListSong
