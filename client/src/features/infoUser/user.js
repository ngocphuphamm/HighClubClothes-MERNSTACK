import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SideBarUser from "./sideBar";
import Moment from "react-moment";
import "../../assets/styles/userInfo.css";
import { useEffect ,useState} from 'react';
import { Toast } from "reactstrap";
import axios from "axios";
import { useCookies } from 'react-cookie';
export default function User() {
  const [cookies] = useCookies();
  const [data,setData] = useState(null);
  useEffect(()=>{
    const getData = async ()=>{
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}user/getUser/62b8d18a4f133081e64d360e`,{
              headers: {
                authorization: "Bearer " + cookies.accessToken,
              }
            })
            setData(data.user);
        }
        catch(err)
        {
          Toast.fire({
            title: "Có gì đó không đúng ~ !",
            icon: "error",  
          });
        }
    }
    getData();
  },[])
  return (
    <>
    {data!== null ? 
      <div class="mainContent-theme ">
        <div class="layout-info-account">
          <div class="title-infor-account text-center mt-5">
            <h1>Tài khoản của bạn </h1>
          </div>

          <div class="container mt-5">
            <div class="row">
              <SideBarUser />
              <div class="col-xs-12 col-sm-9">
                <div class="row">
                  <div class="col-xs-12" id="customer_sidebar">
                    <h5 class="title-detail">Thông tin tài khoản</h5>
                    <div>
                      <h2 class="name_account">Tên :  Phu Pham</h2>
                      <div class="email">Email : ngocphupham682001@gmail.com</div>
                      <div class="email">SĐT : 2031223</div>
                      <div class="email">Giới Tính : Nữ</div>
                      Sinh Năm: <Moment format="DD/MM/YYYY" class="email">
                        2022-12-02T17:00:00.000+00:00
                      </Moment>
                      <div class="email"> Địa Chỉ : Nữ</div>
                    </div>
                  </div>
                  <div
                    class="col-xs-12 customer-table-wrap"
                    id="customer_orders"
                  >
                    <div class="customer_order customer-table-bg ">
                      <div className="text-center">
                        <h5>
                            <a href="#!" >
                              Sữa Thông Tin
                            </a>
                        </h5>
                      </div>
                      <div>
                        <form>
                          <div
                            class="text-center mt-3 "
                            style={{ width: "500px", marginLeft: "250px" }}
                          >
                            <input
                              type="text"
                              class="form-control"
                              id="formGroupExampleInput"
                              placeholder="Tên"
                            />
                          </div>
                          <div
                            class="form-group mt-3"
                            style={{ width: "500px", marginLeft: "250px" }}
                          >
                            <input
                              type="text"
                              class="form-control"
                              id="formGroupExampleInput2"
                              placeholder="SĐT"
                            />
                          </div>
                          <div className="d-flex mt-2" style={{marginLeft:"250px"}} >
                            <div class="form-group">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Default radio
                              </label>
                            </div>
                            <div class="form-check" style={{marginLeft:"30px"}}>
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Default checked radio
                              </label>
                            </div>
                          </div>

                          <div
                            class="form-group mt-3"
                            style={{ width: "500px", marginLeft: "250px" }}
                          >
                            <input
                              type="text"
                              class="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Ngày Sinh"
                            />
                          </div>
                          <div
                            class="form-group mt-3"
                            style={{ width: "500px", marginLeft: "250px" }}
                          >
                            <input
                              type="text"
                              class="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Địa Chỉ"
                            />
                          </div>
                        </form>
                        <div className="text-center mt-2">
                             <button class="btn btn-primary">Sữa</button>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : null }
    </>
  );
}