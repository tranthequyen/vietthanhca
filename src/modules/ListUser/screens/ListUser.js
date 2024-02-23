import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useListUser } from '../utils';
import DataTablez from '@/components/Datatablez';
import { Button } from 'primereact/button';
import InputForm from '@/components/Form';
const Header = () => {
      return (
            <>
                  <div className='grid border-1  border-round-xl shadow-3' style={{ border: "1px solid #76e19b" }}>
                        <div className="col-3">
                              <InputForm className="w-full" label=" Người dùng" />
                        </div>
                        <div className="col-3">
                              <InputForm className="w-full" label=" Email" />
                        </div>
                        <div className="col-3">
                              <InputForm className="w-full" label="Chức vụ" />
                        </div>
                  </div>
            </>
      )
}
function ListUser() {
      const data = useListUser()

      return (
            <div className='element'>
                  <div className="">
                        <Header />
                  </div>
                  <div className="element">
                        <Button label='Thêm mới' className='mb-3' />
                        <DataTablez value={data} >
                              <Column field="username" header="Tên người dùng" ></Column>
                              <Column field="email" header="Email"></Column>
                              <Column body={
                                    (rowData) => {
                                          return rowData.admin === true
                                                ?
                                                <span className='bg-cyan-400 p-3 border-round-xl'>Admin</span>
                                                :
                                                <span className='bg-yellow-300 p-3 border-round-xl '>Người dùng</span>
                                    }
                              } header="Chức vụ"></Column>

                        </DataTablez>

                  </div>
            </div>
      )
}

export default ListUser
