import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import InputForm from '@/components/Form';

import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { clientApi } from '@/axios';
import { listToast } from '@/constants/main';
import { setToast } from '@/redux/toast';
import { useDispatch } from 'react-redux';

function SignUp(props) {
      const { visibleSignUp, setVisibleSignUp, setVisibleLogin } = props
      const [checked, setChecked] = useState(false);

      const dispatch = useDispatch()

      const [infos, setInfos] = useState({
            username: '',
            password: '',
            email: ''
      })
      const handleData = async () => {

            try {
                  await clientApi.post('/user/signup', infos);
                  setVisibleSignUp(false)
                  setVisibleLogin(true)
                  dispatch(setToast({ ...listToast[0], detail: "Đăng ký thành công" }))
            } catch (error) {
                  console.error(error);

            }
      };
      const footerContent = (
            <div>
                  <Button label="Hủy" icon="pi pi-times" onClick={() => setVisibleSignUp(false)} severity="danger" />
                  <Button label="Xác nhận" onClick={handleData} severity="secondary" icon="pi pi-check-square" />
            </div>
      );
      return (
            <div>
                  <Dialog header="Đăng ký" visible={visibleSignUp} style={{ width: '50vw', top: '10px', position: 'fixed' }} onHide={() => setVisibleSignUp(false)} footer={footerContent}>
                        <InputForm
                              value={infos.email}
                              onChange={(e) => setInfos({ ...infos, email: e.target.value })} label="Email"
                              className="w-full"
                        />
                        <InputForm
                              className="w-full"
                              value={infos.username}
                              label="Tài Khoản"
                              onChange={(e) => setInfos({
                                    ...infos, username: e.target.value
                              })} />

                        <InputForm
                              value={infos.password}
                              onChange={(e) => setInfos({ ...infos, password: e.target.value })} label="Mật khẩu"
                              className="w-full"

                        />
                        <div className="flex align-items-center px-2">
                              <Checkbox value="Cheese" onChange={e => setChecked(e.checked)} checked={checked} />
                              <label className="ml-2">Hiển thị mật khẩu</label>
                        </div>
                  </Dialog>

            </div>
      )
}

export default SignUp