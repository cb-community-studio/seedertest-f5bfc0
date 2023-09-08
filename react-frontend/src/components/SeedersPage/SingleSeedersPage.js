import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Checkbox } from 'primereact/checkbox';

const SingleSeedersPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("seeders")
            .get(urlParams.singleSeedersId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Seeders", type: "error", message: error.message || "Failed get seeders" });
            });
    }, []);

    const goBack = () => {
        history.replace("/seeders");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Seeders</h3>
                </div>
                <p>seeders/{urlParams.singleSeedersId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">seed</label>
                    <Checkbox checked={_entity?.{data?.seed}} onChange={ (e) => setValByKey("{data?.seed}", e.checked)}  ></Checkbox> */}
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleSeedersPage);
